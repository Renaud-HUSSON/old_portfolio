const Database = require("../config/db")
const User = require("../models/User")

const database = new Database()
const db = database.connect()

const jwt = require('jsonwebtoken')

/**
 * Verify if a refresh token exists
 * 
 * @param {Request} req - Request
 * 
 * @returns an object containing if refresh token is verified, and its datas if it is
 * 
 */
const verifyRefreshToken = (req) => {
  return new Promise(resolve => {
    const token = req.cookies.refresh_token
    
    if(!token) resolve({exists: false})
  
    //Instanciate a user with the token stored in the cookie to verify it exists
    const user = new User(db, {token: token})
  
    //Tries to get a user that matches the refresh token
    user.read_single(async (err, results) => {
      if(err) console.log(err)
      
      if(results.length === 0) resolve({exists: false})
      
      //Verify refresh token isn't expired
      jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if(err) resolve({exists: false})
        
        resolve({
          exists: true,
          content: decoded
        })
      })
    }, 'token')
  })
  
}

module.exports = verifyRefreshToken