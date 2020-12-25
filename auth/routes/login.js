const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Database = require('../config/db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const database = new Database()
const db = database.connect()

//Creates route for login
router.post('/', (req, res) => {
  const userCredentials = req.body

  if(!(userCredentials.username && userCredentials.password)){
    return res.status(400).send({
        error: 'Le nom d\'utilisateur et le mot de passes doivent être remplis'
    })
  }

  const user = new User(db, userCredentials)

  //Tries reads user information to verify credentials are correct 
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

    //Verify that the password matches the one hashed
    const match = await bcrypt.compare(userCredentials.password, results[0].password)

    if(!match){
      return res.status(401).send({
        error: 'Le mot de passe est incorrect'
      })
    }
    
    //Creates the refresh token
    const refresh_token = jwt.sign({
      id: results[0].id,
      username: results[0].username,
      role: results[0].role
    }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '30days'
    })

    //Creates a user with the new refresh token
    const updatedUser = new User(db, {
      ...results[0],
      token: refresh_token
    })

    //Updates the user in the database with the new refresh token
    updatedUser.update((err) => {
      if(err){
        return res.status(500).send()
      }

      res.cookie("refresh_token", refresh_token)
      
      res.redirect('/auth/token')
    })
  })
})

module.exports = router