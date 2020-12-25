const jwt = require("jsonwebtoken")

/**
 * generates an access token for a user, and stores it in a cookie
 * 
 * @param {Object} user - Object container user's role
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

module.exports = generateAccessToken