require('dotenv').config()
const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

//Middlewares
// app.use(require('cookie-parser')())
app.use(express.urlencoded({ extended: false }))
app.use(fileUpload({createParentPath: '/images'}))

//Routes
app.use('/images/upload', require('./routes/upload'))
app.use('/images', express.static('./images'))

const PORT = process.env.port || 8083

app.listen(PORT, () => {
  console.log(`image server is running on port: ${PORT}`)
})