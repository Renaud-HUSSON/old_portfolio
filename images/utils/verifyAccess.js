const jwt = require('jsonwebtoken')

const verifyAccess = (req) => {
  return new Promise((resolve) => {
    const access_token = req.cookies.access_token

    if(!access_token){
      resolve({
        correct: false,
        data: undefined
      })
    }
    
    jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if(err){
        resolve({
          correct: false,
          data: undefined
        })
      }
  
      if(decoded.role !== 'admin'){
        resolve({
          correct: false,
          data: undefined
        })
      }
  
      resolve({
        correct: true,
        data: decoded
      })
    })
  })
  
}

module.exports = verifyAccess