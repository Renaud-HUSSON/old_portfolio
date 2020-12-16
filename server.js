const express = require('express')

require('dotenv').config()

//Instanciate our express app
const app = express()

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Projects API Routes
app.use('/images', express.static('./images'));
app.use('/api/projets', require('./routes/api/projets'))
app.use('/api/messages', require('./routes/api/messages'))
app.use('/api/competences', require('./routes/api/competences'))
app.use('/api/parcours', require('./routes/api/parcours'))
app.use('/api/experiences', require('./routes/api/experiences'))
app.use('/login', require('./routes/login'))

//Use PORT defined in env variables if it exists, else run on custom port
const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})