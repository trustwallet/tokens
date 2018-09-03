const fs = require('fs')

const imgExp = /\.png$/


const exitWithMsg = (msg) => {
    console.log(msg)
    process.exit(1)
}

const imageFileNames = fs.readdirSync('./images')

imageFileNames.forEach(n => {
    if (imgExp.test(n)) {
    } else {
      exitWithMsg(`${n} image must be png`)
    }
})