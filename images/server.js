require('dotenv').config()
const express = require('express')

const app = express()

app.use('/images', express.static('./images'))

const PORT = process.env.port || 8083

app.listen(PORT, () => {
  console.log(`image server is running on port: ${PORT}`)
})