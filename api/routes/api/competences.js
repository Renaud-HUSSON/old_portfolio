const express = require('express')
const router = express.Router()
const Competence = require('../../models/Competence')
const Database = require('../../config/db')

const database = new Database()
const db = database.connect()


//Get all skills
router.get('/', (_, res) => {
  const skill = new Competence(db)

  skill.read_all((err, results) => {
    if(err){
      console.error(`Erreur pendant la récupération des compétences: ${err}`)
      return
    }
    res.send(results)
  })
})

//Reads a single skill
router.get('/:id', (req, res) => {
  const skill = new Competence(db)
  const id = req.params.id

  skill.id = id

  skill.read_single((err, results) => {
    if(err){
      console.error(`Erreur pendant la récupération des compétences: ${err}`)
      return
    }
    if(results.length === 0){
      console.error(`La compétence ${id} n'existe pas`)
      return
    }
    res.send(...results)
  })
})

//Creates a skill
router.post('/', (req, res) => {
  const newSkill = req.body
  
  if(!(newSkill.name && newSkill.type && newSkill.image)){
    res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
    return
  }

  const skill = new Competence(db, newSkill)

  skill.create((err) => {
    if(err){
      res.send({
        error: `Une erreur est survenue lors de la création de la compétence: ${err}`
      })
      return
    }

    res.send({
      success: 'La compétence a bien été ajoutée'
    })
  })
})

//Updates a skill
router.put('/', (req, res) => {
  const updatedSkill = req.body

  if(!(updatedSkill.id && updatedSkill.name && updatedSkill.image)){
    return res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
  }

  const skill = new Competence(db, updatedSkill)

  skill.update(err => {
    if(err){
      return res.status(500).send({
        error: `Une erreur est survenue lors de la mise à jour de la compétence ${updatedSkill.id}: ${err}`
      })
    }

    res.send({
      success: `La compétence ${updatedSkill.id} a bien été mise à jour`
    })
  })
})

//Deletes a skill
router.delete('/:id', (req, res) => {
  const id = req.params.id
  const skill = new Competence(db)

  skill.id = id

  skill.delete(err => {
    if(err){
      res.status(500).send({
        error: `Une erreur est survenue lors de la suppresion de la compétence ${id}`
      })
      return
    }

    res.send({
      success: `La compétence ${id} a bien été supprimé`
    })
  })
})

module.exports = router