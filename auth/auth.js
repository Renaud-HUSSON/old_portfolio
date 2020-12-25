require('dotenv').config()
const express = require('express')

//Creating express app
const app = express()

//Body parser middleware
app.use(express.json())

//Cookie parser middleware
app.use(require('cookie-parser')())

//Route for authentication
app.use('/auth/login', require('./routes/login'))
app.use('/auth/token', require('./routes/token'))
app.use('/auth/logged', require('./routes/logged'))

//Use defined port in env variables or port 8082
const PORT = process.env.AUTH_PORT || 8082 

app.listen(PORT, () => {
    console.log(`Auth service is running on port: ${PORT}`)
})