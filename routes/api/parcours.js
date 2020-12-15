const express = require('express')
const router = express.Router()
const Parcours = require('../../models/Parcours')
const Database = require('../../config/db')

const database = new Database()
const db = database.connect()

//Get all parcours
router.get('/', (_, res) => {
  const parcours = new Parcours(db)

  parcours.read_all((err, results) => {
    if(err){
      console.error(`Erreur pendant la récupération des parcours: ${err}`)
      return
    }
    res.send([...results])
  })
})

//Reads a single parcours
router.get('/:id', (req, res) => {
  const parcours = new Parcours(db)
  const id = req.params.id

  parcours.id = id

  parcours.read_single((err, results) => {
    if(err){
      console.error(`Erreur pendant la récupération des parcours: ${err}`)
      return
    }
    if(results.length === 0){
      console.error(`Le parcours ${id} n'existe pas`)
      return
    }
    res.send(...results)
  })
})

//Creates a parcours
router.post('/', (req, res) => {
  const newParcours = req.body
  
  if(!(newParcours.date && newParcours.name)){
    res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
    return
  }

  const parcours = new Parcours(db, newParcours)

  parcours.create((err) => {
    if(err){
      res.send({
        error: `Une erreur est survenue lors de la création du parcours: ${err}`
      })
      return
    }

    res.send({
      success: 'Le parcours a bien été ajouté'
    })
  })
})

//Updates a parcours
router.put('/', (req, res) => {
  const updatedParcours = req.body

  if(!(updatedParcours.id && updatedParcours.date && updatedParcours.name)){
    return res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
  }

  const parcours = new Parcours(db, updatedParcours)

  parcours.update(err => {
    if(err){
      return res.status(500).send({
        error: `Une erreur est survenue lors de la mis à jour du parcours ${updatedParcours.id}: ${err}`
      })
    }

    res.send({
      success: `Le parcours ${updatedParcours.id} a bien été mis à jour`
    })
  })
})

//Deletes a parcours
router.delete('/:id', (req, res) => {
  const id = req.params.id
  const parcours = new Parcours(db)

  parcours.id = id

  parcours.delete(err => {
    if(err){
      res.status(500).send({
        error: `Une erreur est survenue lors de la suppresion du parcours ${id}`
      })
      return
    }

    res.send({
      success: `Le parcours ${id} a bien été supprimé`
    })
  })
})

module.exports = router