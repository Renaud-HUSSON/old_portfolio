const express = require('express')
const router = express.Router()
const Experience = require('../../models/Experience')
const Database = require('../../config/db')

const database = new Database()
const db = database.connect()

//Get all experiences
router.get('/', (_, res) => {
  const experiences = new Experience(db)

  experiences.read_all((err, results) => {
    if(err){
      console.error(`Erreur pendant la récupération des experiences: ${err}`)
      return
    }
    res.send([...results])
  })
})

//Reads a singL'expérience
router.get('/:id', (req, res) => {
  const experiences = new Experience(db)
  const id = req.params.id

  experiences.id = id

  experiences.read_single((err, results) => {
    if(err){
      console.error(`Erreur pendant la récupération des experiences: ${err}`)
      return
    }
    if(results.length === 0){
      console.error(`L'expérience ${id} n'existe pas`)
      return
    }
    res.send(...results)
  })
})

//Creates a experiences
router.post('/', (req, res) => {
  const newexperiences = req.body
  
  if(!(newexperiences.date && newexperiences.name)){
    res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
    return
  }

  const experiences = new Experience(db, newexperiences)

  experiences.create((err) => {
    if(err){
      res.send({
        error: `Une erreur est survenue lors de la création de l'experience: ${err}`
      })
      return
    }

    res.send({
      success: 'L\'expérience a bien été ajoutée'
    })
  })
})

//Updates a experiences
router.put('/', (req, res) => {
  const updatedexperiences = req.body

  if(!(updatedexperiences.id && updatedexperiences.date && updatedexperiences.name)){
    return res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
  }

  const experiences = new Experience(db, updatedexperiences)

  experiences.update(err => {
    if(err){
      return res.status(500).send({
        error: `Une erreur est survenue lors de la mise à jour de l'experience ${updatedexperiences.id}: ${err}`
      })
    }

    res.send({
      success: `L'expérience ${updatedexperiences.id} a bien été mise à jour`
    })
  })
})

//Deletes a experiences
router.delete('/:id', (req, res) => {
  const id = req.params.id
  const experiences = new Experience(db)

  experiences.id = id

  experiences.delete(err => {
    if(err){
      res.status(500).send({
        error: `Une erreur est survenue lors de la suppresion de l'expérience ${id}`
      })
      return
    }

    res.send({
      success: `L'expérience ${id} a bien été supprimé`
    })
  })
})

module.exports = router