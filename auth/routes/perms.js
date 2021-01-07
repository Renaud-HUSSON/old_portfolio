const Database = require('../config/db')
const Perms = require('../models/Perms')

const router = require('express').Router()

const database = new Database()
const db = database.connect()

router.post('/', (req, res) => {
  const body = req.body

  const perm = new Perms(db, body)

  perm.read_single((err, results) => {
    if(err) {
      return res.status(404).send(false)
    }

    if(results.length === 0){
      return res.status(404).send(false)
    }
    
    if(body.roles !== 'admin' && results[0].roles !== body.roles){
      return res.status(403).send(false)
    }

    res.send(true)
  })
})

module.exports = router