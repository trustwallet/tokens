const fs = require('fs')

const imgExp = /\.png$/
const upperCaseExp = /[A-F]/
const OxExp = /^(0x)/
const addressExp = /[0-9a-f]{40}$/i

const exitWithMsg = (msg) => {
    console.log(msg)
    process.exit(1)
}

const isAddress = address => addressExp.test(address)

const remoteExtension = string => string.replace(/.png/g, '')

const imageFileNames = fs.readdirSync('./images')

imageFileNames.forEach(image => {
    const address = remoteExtension(image)

    if (!imgExp.test(image)) {
        exitWithMsg(`${image} image must be png`)
    } 
    
    if (upperCaseExp.test(address)) {
        exitWithMsg(`${address} image must be in lowercase`)
    }

    if (!OxExp.test(address) && !address.startsWith('ethereum')) {
        exitWithMsg(`${address} must start with 0x`)
    }

    if (!isAddress(address) && !address.startsWith('ethereum')) {
        exitWithMsg(`${address} image must have length 42 instead have ${address.length}`)
    }
})

console.log(`Passed all tests`)