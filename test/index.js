const fs = require('fs')

const imgExp = /\.png$/
const addressExp = /^(0x)?[0-9a-f]{40}$/i

const exitWithMsg = (msg) => {
    console.log(msg)
    process.exit(1)
}

const isAddress = address => addressExp.test(address)

const imageFileNames = fs.readdirSync('./images')

imageFileNames.forEach(n => { 
    if (!imgExp.test(n)) {
        exitWithMsg(`${n} image must be png`)
    } 
})

console.log(`Passed all tests`)