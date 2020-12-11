require('dotenv').config()

const express = require('express')

const PORT = process.env.PORT || 8081

const app = express()

app.get('/', (req, res) => {
    res.send("Salut frérot !")
})

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})