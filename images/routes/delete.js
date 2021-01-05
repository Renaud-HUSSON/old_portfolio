const fs = require('fs')
const verifyAccess = require('../utils/verifyAccess')

const router = require('express').Router()

router.delete('/', async (req, res) => {
  const verified = await verifyAccess(req)

  !verified.correct ? res.status(401).send({}) : ''
  
  const path = `/images${req.body.path}`

  if(!path) return res.status(400).send({})

  fs.unlink(path, (err) => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la suppresion de l'image: ${err}`
    })
  })

  try {
    fs.unlink(path.replace(/^(.+)([.](jpg|png|jpeg))$/, '$1-thumbnail$2'), err => {
      console.log(`Erreur: ${err}`)
    })
  }catch(e){
    
  }

  res.send({})
})

module.exports = router