const mongodb = require('mongodb')
const dbname = process.env.DB_NAME
const dburl = `${process.env.DB_URL}/${dbname}`

module.exports = {mongodb,dbname,dburl}