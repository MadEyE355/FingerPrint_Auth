# FingerPrint_Auth

#### A simple site to demonstrate the use of browser fingerprints as an authentication mechanism

## LINK :   [Here](https://fingerprint-auth-pnpz.onrender.com/)

## Tested On : Chrome , Safari
### Does Not Work On : Privacy focused browsers (example : Brave , Tor etc.)

## Description
### Browser fingerprints are bits of information a browser collect about your browser and OS , unlike cookies these cant be cleared or reset although some of this information can be changed by the user intentionally or automatically with updates , but using the information which is stable can be used to accurately mark a device

## About Site
### The site shows how combining different fingerprints can form a somewhat reliable authentication mechanism

### The site contains a simple login and register , __theoretically__ _(if this technique is implemented perfectly)_ a user can __only__ login from the device _(and sometimes browser)_ he used to register on the site and no one else can login without having access to the users device

### __ADVANTAGE :__ The main advantage of this is user dont have to remember anything beside their username and it removes most of the friction there is to login , also if other techniques like cookies are used the friction of entering and remembering the username can also be removed

### __Disadvantage :__ The main problem with this is the fingerprints are not  100% stable and can change even if the user did not want them to change which can cause the user to lockout from his account forever

## Final Note
### It is like a cat and mouse game where browsers _(some)_ keep fighting to remove these fingerprints but new advancements to the web keep adding more fingerprints 

### This technique alone can not be used to make a good auth mechanism as of now and also most probably in the future too , although combining it with other techiques can reduce the friction of authentication and also kill attacking techniques like Brute Forcing passwords



