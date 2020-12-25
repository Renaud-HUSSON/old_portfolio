const verifyRefreshToken = require("../utils/verifyRefreshToken");

const router = require('express').Router()

router.get('/', async (req, res) => {
  const logged = await verifyRefreshToken(req)
  
  if(logged.exists){
    res.send(true)
  }else{
    res.send(false)
  }
})

module.exports = router