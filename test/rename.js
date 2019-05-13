const path = require('path')
const fs = require('fs')

// read file csv
fs.readFile('slip44_blockchains.csv', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const lines = data.toString().split('\n')

  // loop
  lines.forEach(line => {
    const l = line.split(',')
    const oldPath = `../blockchains/${l[1]}.png`
    const newPath = `../blockchains/${l[2]}.png`
    // rename file with matching name
    fs.rename(path.join(__dirname, oldPath), path.join(__dirname, newPath), err => {
      if (err) console.log('ERROR: ', err)
    })
  })

  // end
  console.log('DONE!!!!', lines.length)
})
