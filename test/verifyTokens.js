const axios = require("axios")
const fs = require('fs')

const TRUST_API = `https://api.trustwallet.com/tokens/verification`
const TOKEN_VERIFICATION_KEY = process.env.TOKEN_VERIFICATION_KEY

const tokens = fs.readdirSync('./tokens')
const addresses = tokens.map(token => token.replace('.png', '').toLowerCase())
axios.post(TRUST_API, {tokens: addresses}, {
    headers: {
        TOKEN_VERIFICATION_KEY
    }
})
.then(res => {
    if (res.status !== 200) {
        exitWithMsg(`Error verifying tokens`)
    }
    console.log(`Tokens were successfully verified`, res.data)
})
.catch(e => {
    exitWithMsg(`Failed to verify tokens ${e.message}`)
})

const exitWithMsg = (msg) => {
    console.log(msg)
    process.exit(1)
}