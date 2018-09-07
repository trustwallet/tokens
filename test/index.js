const fs = require('fs')

const imgExp = /\.png$/
const addressExp = /^(0x)?[0-9a-f]{40}$/i

const exitWithMsg = (msg) => {
    console.log(msg)
    process.exit(1)
}

const isAddress = address => addressExp.test(address)

const imageFileNames = fs.readdirSync('./images')

imageFileNames.forEach(image => { 
    if (!imgExp.test(image)) {
        exitWithMsg(`${image} image must be png`)
    } 

    if (image) {
        const address =  image.replace(/.png/g, '')
        if (!addressExp.test(address) && !image.startsWith('ethereum')) {
            exitWithMsg(`${address} image must have length 42 instead have ${address.length} or start with '0x'`)
        }
    }
})

console.log(`Passed all tests`)