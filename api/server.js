const express = require('express')
const fileUpload = require('express-fileupload')

require('dotenv').config()

//Instanciate our express app
const app = express()

//Body Parser Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Custom middlewares
app.use(require('../api/middlewares/verifyPerms'))

//API Routes
app.use('/api/projets', require('./routes/api/projets'))
app.use('/api/messages', require('./routes/api/messages'))
app.use('/api/competences', require('./routes/api/competences'))
app.use('/api/parcours', require('./routes/api/parcours'))
app.use('/api/experiences', require('./routes/api/experiences'))

//Use PORT defined in env variables if it exists, else run on custom port
const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})