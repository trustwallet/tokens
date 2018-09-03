#!/usr/bin/env node

const fs = require('fs')
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const mongoURL = process.env.MONGO_URI

mongoose.connect(mongoURL, {useNewUrlParser: true})

mongoose.connection.on('connected', function() {
    logger.info('MongoDB event connected');
})

mongoose.connection.on('error', function(err) {
    logger.error('MongoDB event error: ' + err);
})

const erc20 = new Schema({
    address: String,
    symbol: String,
    decimal: Number,
    totalSupply: String,
    name: String,
    enabled: Boolean,
    verified: Boolean,

})

const erc20Model = mongoose.model('erc20contracts', erc20)

fs.readdirSync('./images', (err, files) => {
    if (err) {
        console.log({err})
        process.exit(1)
    }
    const images = files.filter(file => file.startsWith('0x')).map(file => file.replace('.png', '').toLowerCase())

    erc20Model.updateMany({address: {$in: images}}, {$set: {verified: true}}, (err, affected) => {
        if (err) {
            console.log(err)
            process.exit(1)
        } else {
            console.log({affected})
            mongoose.connection.close()
            process.exit(0)
        }
    })
})
