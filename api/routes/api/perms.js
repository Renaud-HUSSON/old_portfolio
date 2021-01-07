const router = require('express').Router()
const Perm = require('../../models/Perm')
const Database = require('../../config/db')

const database = new Database()
const db = database.connect()

//Get all perms
router.get('/', (req, res) => {
  const perm = new Perm(db)

  perm.read_all((err, results) => {
    if(err) return console.error(`Une erreur est survenue lors de la récupération des permissions: ${err}`)

    res.send(results)
  })
})

//Get a single perm
router.get('/:id', (req, res) => {
  const perm = new Perm(db)
  const id = req.params.id

  perm.id = id

  perm.read_single((err, results) => {
    if(err) return console.error(`Une erreur est survenue lors de la récupération de la permission n°${id}: ${err}`)

    if(results.length === 0) return console.error(`Le perm n°${id} n'existe pas`)
    
    res.send(...results)
  })
})

//Creates a perm
router.post('/', (req, res) => {
  const newPerm = req.body

  if(!newPerm.endpoint || !newPerm.method || !newPerm.role){
    return res.status(400).send({
      error: 'Un ou plusieurs champs sont vide, veuillez les remplir'
    })
  }

  const perm = new Perm(db, newPerm)

  perm.create(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la création de la permission: ${err}`
    })

    res.send({
      success: 'Le perm a bien été ajouté !'
    })
  })
})

//Updates a perm
router.put('/', (req, res) => {
  const newPerm = req.body

  if(!newPerm.id || !newPerm.chemin){
    return res.status(400).send({
      error: 'Un ou plusieurs champs sont vide, veuillez les remplir'
    })
  }

  const perm = new Perm(db, newPerm)

  perm.update(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la création de la permission: ${err}`
    })

    res.send({
      success: 'Le perm a bien été ajouté !'
    })
  })
})

//Deletes a perm
router.delete('/:id', (req, res) => {
  const perm = new Perm(db)
  const id = req.params.id
  
  perm.id = id

  perm.delete(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la suppresion de l'perm n°${id}: ${err}`
    })

    res.send({
      success: 'L\'perm a bien été supprimé'
    })
  })
})

module.exports = router