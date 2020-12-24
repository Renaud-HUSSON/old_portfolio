require('dotenv').config()
const express = require('express')

//Creating express app
const app = express()

//Body parser middleware
app.use(express.json())

//Route for authentication
app.use('/auth/login', require('./routes/login'))

//Use defined port in env variables or port 8082
const PORT = process.env.AUTH_PORT || 8082 

app.listen(PORT, () => {
    console.log(`Auth service is running on port: ${PORT}`)
})