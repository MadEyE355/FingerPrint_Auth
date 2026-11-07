const express = require('express')
const path = require('path')
const { Pool } = require('pg')

const app = express()
const port = process.env.PORT || 3000

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

app.use(express.json())

// Create the table on startup if it doesn't exist
async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      username    TEXT PRIMARY KEY,
      fingerprint TEXT NOT NULL
    )
  `)
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/register', async (req, res) => {
  const { username, fingerprint } = req.body || {}

  if (!username || !fingerprint) {
    return res.status(400).json({ error: 'Username and fingerprint are required' })
  }

  try {
    await pool.query(
      'INSERT INTO users (username, fingerprint) VALUES ($1, $2)',
      [username, fingerprint]
    )
    res.status(201).json({ message: 'Registered', username })
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'Username already taken' })
    }
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

app.post('/login', async (req, res) => {
  const { username, fingerprint } = req.body || {}

  if (!username || !fingerprint) {
    return res.status(400).json({ error: 'Username and fingerprint are required' })
  }

  try {
    const { rows } = await pool.query(
      'SELECT fingerprint FROM users WHERE username = $1',
      [username]
    )
    const user = rows[0]

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    if (user.fingerprint !== fingerprint) {
      return res.status(401).json({ error: 'Device not recognised' })
    }

    res.json({ message: `Hi ${username}`, username })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

init()
  .then(() => {
    app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
  })
  .catch(err => {
    console.error('Database connection failed:', err.message)
    process.exit(1)
  })