const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Database = require('../config/db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const database = new Database()
const db = database.connect()

router.post('/', (req, res) => {
  const userCredentials = req.body

  if(!(userCredentials.username && userCredentials.password)){
    return res.status(400).send({
        error: 'Le nom d\'utilisateur et le mot de passes doivent être remplis'
    })
  }

  const user = new User(db, userCredentials)
  
  user.read_single(async (err, results) => {
    if(err){
      return res.status(400).send({
        error: `Un problème est survenue lors de la connection ${err}`
      })
    }

    if(results.length === 0){
      return res.status(401).send({
        error: 'Le nom d\'utilisateur n\'existe pas'
      })
    }

    const match = await bcrypt.compare(userCredentials.password, results[0].password)

    if(!match){
      return res.status(401).send({
        error: 'Le mot de passe est incorrect'
      })
    }

    res.send('Logged in !')
  })
})

module.exports = router