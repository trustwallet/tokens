const axios = require("axios")
const fs = require('fs')
const TRUST_API = `https://api.trustwallet.com/tokens/verification`
const TOKEN_VERIFICATION_KEY = process.env.TOKEN_VERIFICATION_KEY

const pngExp = /\.png$/
const upperCaseExp = /[A-F]/
const OxExp = /^0x/
const addressExp = /[0-9a-f]{40}$/i

const exitWithMsg = (msg) => {
    console.log(msg)
    process.exit(1)
}

const isAddress = address => addressExp.test(address)
const isFilePng = name => pngExp.test(name)
const remotePngExtension = string => string.replace(/.png/g, '')

const tokens = fs.readdirSync('./tokens')

tokens.forEach(token => {
    const address = remotePngExtension(token)

    if (!isFilePng(token)) {
        exitWithMsg(`${token} image must be png`)
    } 
    
    if (upperCaseExp.test(address)) {
        exitWithMsg(`${address} image must be in lowercase`)
    }

    if (!OxExp.test(address) && !address.startsWith('ethereum')) {
        exitWithMsg(`'${address}' must start with 0x`)
    }

    if (!isAddress(address) && !address.startsWith('ethereum')) {
        exitWithMsg(`${address} image must have length 42 instead have ${address.length}`)
    }
})

console.log(`Passed all tests`)

const checkRootDirectory = () => {
    fs.readdirSync(".").forEach(file => {
        if(isFilePng(file)) {
            exitWithMsg(`Move ${file} to ./tokens folder`)
        }

    })
}
checkRootDirectory()

const verifyTokens = () => {
    const addresses = tokens.map(token => token.replace('.png', '').toLowerCase())
    axios.post(TRUST_API, {tokens: addresses}, {
        headers: {
            TOKEN_VERIFICATION_KEY
        },
        timeout: 5000
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
}

verifyTokens()