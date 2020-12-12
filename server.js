const express = require('express')

require('dotenv').config()

//Instanciate our express app
const app = express()

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Projects API Routes
app.use('/api/projects', require('./routes/api/projets'))

//Use PORT defined in env variables if it exists, else run on custom port
const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})