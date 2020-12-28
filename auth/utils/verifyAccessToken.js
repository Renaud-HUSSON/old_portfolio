const Database = require("../config/db")

const jwt = require('jsonwebtoken')

/**
 * Verify if a access token is valid
 * 
 * @param {Request} req - Request
 * 
 * @returns an object containing if the access token is verified, and its datas if it is
 * 
 */
const verifyAccessToken = (token) => {
  return new Promise(resolve => {
    //Verify refresh token is valid
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) {
          resolve({valid: false})
        }
        
        resolve({
          valid: true,
          content: decoded
        })
      })
  })
}

module.exports = verifyAccessToken