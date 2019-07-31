const axios = require("axios")
const fs = require('fs')
const path = require("path")
// import * as Promise from "bluebird";
var Promise = require("bluebird");
// import * as BluebirdPromise from "bluebird";
const chain = "classic"
const RAY_ETH = `https://trust-${chain}.herokuapp.com/tokenInfo/`
const tokens = fs.readdirSync('./tokens')

async function run() {
    console.log(`Found ${tokens.length}`)
    Promise.map(tokens, async token => {
        const addressNoExt = token.replace(".png", "").toLowerCase()
        const url = `${RAY_ETH}${addressNoExt}`
        await axios.get(url)
        .then(({data}) => {
            console.log(data)
            if (data) {
                // console.log("DIR NAME", __dirname)
                const tokenDir = `${__dirname}/blockchains/${chain}/assets/${addressNoExt}`
                // console.log({tokenDir})
                fs.mkdirSync(tokenDir, {recursive: true}, (err) => {
                    if (err) throw err;
                })
                const src = `${__dirname}/tokens/${token}`
                const dst = `${__dirname}/blockchains/${chain}/assets/${addressNoExt}/${token}`
                console.log({src})
                console.log({dst})
                fs.copyFileSync(src, dst)
            }
        })
        .catch(e => {
            console.log(e.message)
        })
    }, {concurrency: 25})
}

run()