const router = require('express').Router()
const Role = require('../../models/Role')
const Database = require('../../config/db')

const database = new Database()
const db = database.connect()

//Get all roles
router.get('/', (req, res) => {
  const role = new Role(db)

  role.read_all((err, results) => {
    if(err) return console.error(`Une erreur est survenue lors de la récupération des roles: ${err}`)

    res.send(results)
  })
})

//Get a single role
router.get('/:nom', (req, res) => {
  const role = new Role(db)
  const nom = req.params.nom

  role.nom = nom

  role.read_single((err, results) => {
    if(err) return console.error(`Une erreur est survenue lors de la récupération du role ayant pour nom ${nom}: ${err}`)

    if(results.length === 0) return console.error(`Le role ayant pour nom ${nom} n'existe pas`)
    
    res.send(...results)
  })
})

//Creates a role
router.post('/', (req, res) => {
  const newRole = req.body

  if(!newRole.nom){
    return res.status(400).send({
      error: 'Un ou plusieurs champs sont vide, veuillez les remplir'
    })
  }

  const role = new Role(db, newRole)

  role.create(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la création du role: ${err}`
    })

    res.send({
      success: 'Le role a bien été ajouté !'
    })
  })
})

//Updates a role
router.put('/', (req, res) => {
  const newRole = req.body

  if(!newRole.nom){
    return res.status(400).send({
      error: 'Un ou plusieurs champs sont vide, veuillez les remplir'
    })
  }

  const role = new Role(db, newRole)

  role.update(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la création du role: ${err}`
    })

    res.send({
      success: 'Le role a bien été ajouté !'
    })
  })
})

//Deletes a role
router.delete('/:nom', (req, res) => {
  const role = new Role(db)
  const nom = req.params.nom
  
  role.nom = nom

  role.delete(err => {
    if(err) return res.status(500).send({
      error: `Une erreur est survenue lors de la suppresion du role n°${id}: ${err}`
    })

    res.send({
      success: 'Le role a bien été supprimé'
    })
  })
})

module.exports = router