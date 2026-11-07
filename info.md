things which can be used

# js level 
Two qualities matter for a fingerprinting signal:

- **Stability**: does it stay the same across sessions and days?
- **Entropy**: how much does it distinguish you from other people? Most of these are stable but low-entropy, since millions of people share the same value.

Fingerprinting works by combining many of them.

## Stable, hardware or OS-level

| Property | Stability | Entropy | Notes |
|---|---|---|---|
| `navigator.platform` | Very high | Low | "Win32", "MacIntel", etc. Changes only with a new OS. |
| `navigator.hardwareConcurrency` | Very high | Low-medium | Changes only with new hardware. |
| `navigator.deviceMemory` | Very high | Low | Chromium only, and capped (max 8), so it's coarse. |
| `screen.width` / `screen.height` | High | Medium | Stable per device, but changes if you switch monitors or resolution. |
| `screen.colorDepth` | Very high | Very low | Almost everyone is 24. |
| `navigator.maxTouchPoints` | High | Low | Tells desktop (0) from phone/tablet/touchscreen laptop (5, 10). |

## Stable, but tied to user settings
## not to be used
| Property | Stability | Entropy | Notes |
|---|---|---|---|
| `navigator.language` | High | Low | Only changes if you change browser or OS language. |
| `navigator.languages` | High | Medium | The full ordered list (e.g. `en-US, en, hi`) is more distinctive than a single language. |
| Timezone | Medium-high | Low-medium | Changes when you travel or move. |
| `navigator.cookieEnabled` | High | Very low | Nearly always true. |

# canvas fingerprinting
## overall turned out to not be useful in this project as all the identifires can change with different types of updates like drivers ,browsers , or system changing the emojis etc

# audio fingerprinting
## chrome does not protect it other browsers do