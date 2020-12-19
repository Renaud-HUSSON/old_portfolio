require('dotenv').config()
const express = require('express')

//Creating express app
const app = express()

//Route for authentication
// app.use('/login', require('./auth/login'))

app.get('/login', (req, res) => {
    res.send('yes')
})

//Use defined port in env variables or port 8082
const PORT = process.env.AUTH_PORT || 8082 

app.listen(PORT, () => {
    console.log(`Auth service is running on port: ${PORT}`)
})