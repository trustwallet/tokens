const fs = require('fs')

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

const imageFileNames = fs.readdirSync('./tokens')

imageFileNames.forEach(image => {
    const address = remotePngExtension(image)

    if (!isFilePng(image)) {
        exitWithMsg(`${image} image must be png`)
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

// Checking root directory for not containing images
const checkRootDirectory = () => {
    fs.readdirSync(".").forEach(file => {
        if(isFilePng(file)) {
            exitWithMsg(`Move ${file} to ./tokens folder`)
        }

    })
}
checkRootDirectory()



console.log(`Passed all tests`)