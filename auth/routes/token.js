const jwt = require('jsonwebtoken')
const Database = require('../config/db')
const router = require('express').Router()
const User = require('../models/User')
const generateAccessToken = require('../utils/generateAccessToken')
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

  if(refresh_token.exists){
    const access_token = generateAccessToken(refresh_token.content)

    res.cookie('access_token', access_token)
    res.send()
  }else{
    res.cookie('refresh_token', '', {maxAge: 0})
    res.status(401).send()
  }
})

module.exports = router