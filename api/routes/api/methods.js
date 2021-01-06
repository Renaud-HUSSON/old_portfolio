const router = require('express').Router()
const Method = require('../../models/Method')
const Database = require('../../config/db')

const database = new Database()
const db = database.connect()

//Get all methods
router.get('/', (req, res) => {
  const method = new Method(db)

  method.read_all((err, results) => {
    if(err) return console.error(`Une erreur est survenue lors de la récupération des méthodes: ${err}`)

    res.send([...results])
  })
})

//Get a single method
router.get('/:nom', (req, res) => {
  const method = new Method(db)
  const nom = req.params.nom

  method.nom = nom

  method.read_single((err, results) => {
    if(err) return console.error(`Une erreur est survenue lors de la récupération de la méthode ayant pour nom ${nom}: ${err}`)

    if(results.length === 0) return console.error(`La méthode ayant pour nom ${nom} n'existe pas`)
    
    res.send([...results])
  })
})

//Creates a method
router.post('/', (req, res) => {
  const newMethod = req.body

  if(!newMethod.nom){
    return res.status(400).send({
      error: 'Un ou plusieurs champs sont vide, veuillez les remplir'
    })
  }

  const method = new Method(db, newMethod)

  method.create(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la création de la méthode: ${err}`
    })

    res.send({
      success: 'La méthode a bien été ajouté !'
    })
  })
})

//Updates a method
router.put('/', (req, res) => {
  const newMethod = req.body

  if(!newMethod.nom){
    return res.status(400).send({
      error: 'Un ou plusieurs champs sont vide, veuillez les remplir'
    })
  }

  const method = new Method(db, newMethod)

  method.update(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la création de la méthode: ${err}`
    })

    res.send({
      success: 'La méthode a bien été ajouté !'
    })
  })
})

//Deletes a method
router.delete('/', (req, res) => {
  const method = new Method(db)
  const id = req.body.id
  
  method.id = id

  method.delete(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la suppresion de la méthode n°${id}: ${err}`
    })

    res.send({
      success: 'La méthode a bien été supprimé'
    })
  })
})

module.exports = router