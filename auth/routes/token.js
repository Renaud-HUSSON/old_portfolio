const jwt = require('jsonwebtoken')
const Database = require('../config/db')
const router = require('express').Router()
const User = require('../models/User')
const generateAccessToken = require('../utils/generateAccessToken')
const verifyAccessToken = require('../utils/verifyAccessToken')
const verifyRefreshToken = require('../utils/verifyRefreshToken')

const database = new Database()
const db = database.connect()

/*
  If a refresh token exists and is valid, 
  and there is no access token or it is expired, 
  it generates one containing user's role
*/
router.get('/', async (req, res) => {
  const refresh_token = await verifyRefreshToken(req)

  /* 
    Generates an access token if the refresh token is valid and 
    if a valid access token doesn't already exist 
  */
  if(refresh_token.exists){
    //If an access_token exists, verify if it is valid
    if(req.cookies.access_token){
      const access_token_valid = await verifyAccessToken(req.cookies.access_token)

      if(access_token_valid.valid){
        return res.send({})
      }
    }

    const access_token = generateAccessToken(refresh_token.content)

    res.cookie('access_token', access_token)

    //Send a welcome message if the request comes from /login
    if(req.headers.referer.match(/[/]login$/)){
      res.send({
        success: `Bienvenue ${refresh_token.content.username} !`
      })
    }else{
      res.send({})
    }
  }else{
    res.cookie('refresh_token', '', {maxAge: 0})
    res.status(401).send()
  }
})

module.exports = router