const router = require('express').Router()
const Database = require('../config/db')
const User = require('../models/User')
const verifyRefreshToken = require('../utils/verifyRefreshToken')

const database = new Database()
const db = database.connect()

router.get('/', async (req, res) => {
  const token = await verifyRefreshToken(req)

  res.cookie('refresh_token', '', {maxAge: 0})
  res.cookie('access_token', '', {maxAge: 0})

  if(!token.exists){
    return res.status(401).send()
  }

  const user = new User(db, {...token.content, token: ''})

  user.update((err, results, fields) => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenu lors de la suppression du token: ${err}`
    })

    res.send({
      success: 'À bientôt !'
    })
  })
})

module.exports = router