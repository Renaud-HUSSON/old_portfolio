const router = require('express').Router()
const Endpoint = require('../../models/Endpoint')
const Database = require('../../config/db')

const database = new Database()
const db = database.connect()

//Get all endpoints
router.get('/', (req, res) => {
  const endpoint = new Endpoint(db)

  endpoint.read_all((err, results) => {
    if(err) return console.error(`Une erreur est survenue lors de la récupération des endpoints: ${err}`)

    res.send([...results])
  })
})

//Get a single endpoint
router.get('/:id', (req, res) => {
  const endpoint = new Endpoint(db)
  const id = req.params.id

  endpoint.id = id

  endpoint.read_single((err, results) => {
    if(err) return console.error(`Une erreur est survenue lors de la récupération du enpoint n°${id}: ${err}`)

    if(results.length === 0) return console.error(`Le endpoint n°${id} n'existe pas`)
    
    res.send([...results])
  })
})

//Creates an endpoint
router.post('/', (req, res) => {
  const newEndpoint = req.body

  if(!newEndpoint.id || !newEndpoint.chemin){
    return res.status(400).send({
      error: 'Un ou plusieurs champs sont vide, veuillez les remplir'
    })
  }

  const endpoint = new Endpoint(db, newEndpoint)

  endpoint.create(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la création du endpoint: ${err}`
    })

    res.send({
      success: 'Le endpoint a bien été ajouté !'
    })
  })
})

//Updates an endpoint
router.put('/', (req, res) => {
  const newEndpoint = req.body

  if(!newEndpoint.id || !newEndpoint.chemin){
    return res.status(400).send({
      error: 'Un ou plusieurs champs sont vide, veuillez les remplir'
    })
  }

  const endpoint = new Endpoint(db, newEndpoint)

  endpoint.update(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la création du endpoint: ${err}`
    })

    res.send({
      success: 'Le endpoint a bien été ajouté !'
    })
  })
})

//Deletes an endpoint
router.delete('/', (req, res) => {
  const endpoint = new Endpoint(db)
  const id = req.body.id
  
  endpoint.id = id

  endpoint.delete(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la suppresion de l'endpoint n°${id}: ${err}`
    })

    res.send({
      success: 'L\'endpoint a bien été supprimé'
    })
  })
})

module.exports = router