const jwt = require('jsonwebtoken')
const Database = require('../config/db')
const router = require('express').Router()
const User = require('../models/User')

const database = new Database()
const db = database.connect()

/*
  If a refresh token exists and is valid, 
  and there is no access token or it is expired, 
  it generates one containing user's role
*/
router.get('/', (req, res) => {
  const token = req.cookies.refresh_token
  
  if(!token){
    return res.status(401).send()
  }

  //Instanciate a user with the token stored in the cookie to verify it exists
  const user = new User(db, {token: token})

  user.read_single(async (err, results) => {
    if(err) console.log(err)
    
    if(results.length === 0){
      //Deletes the refresh token if it is incorrect
      res.cookie('refresh_token', '' ,{maxAge: 0})

      return res.status(401).send()
    }
    
    //Verify refresh token isn't expired
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if(err){
        res.cookie('refresh_token', '' ,{maxAge: 0})
        return res.status(401).send({
          redirect: '/login'
        })
      }
      
      //Generates an access token and stores it in a cookie
      const access_token = generateAccessToken(decoded)
      
      res.cookie('access_token', access_token)
      res.send()
    })
  }, 'token')
})

/**
 * generates an access token for a user, and stores it in a cookie
 * 
 * @param {Object} user - The user we want to grant an access token to
 * 
 * @returns the jwt
 */
const generateAccessToken = (user) => {
  return jwt.sign({
    role: user.role
  }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 600
  })
}

module.exports = router