const express = require('express')
const Database = require('../../config/db')
const Projet = require('../../models/Projet')
const router = express.Router()

const database = new Database()
const db = database.connect()

//Gets all projetcs
router.get('/', (_, res) => {
  const projet = new Projet(db)

  projet.read_all((err, results, _) => {
    if(err){
      console.error(`Erreur pendant la récupération des projets: ${err}`)
      return
    }
    res.send(results)
  })
})

//Gets a single project
router.get('/:id', (req, res) => {
  const projet = new Projet(db)
  const id = req.params.id

  projet.id = id;

  projet.read_single((err, results, _) => {
    if(err) {
      console.log(`Erreur lors de la récupération du projet n°${id}: ${err}`)
      return
    }
    if(results.length === 0){
      return res.status(400).send({
        error: `Le projet ${id} n'existe pas`
      })
    }
    res.send(...results)
  })
})

//Creates a project
router.post('/', (req, res) => {
  const newProject = req.body
  
  if(!(newProject.name && newProject.image && newProject.description && newProject.tech)){
    return res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
  }

  const projet = new Projet(db, newProject)

  projet.create((err) => {
    if(err){
      return res.send({
        error: `Une erreur est survenue lors de la création du projet: ${err}`
      })
    }

    res.send({
      success: 'Le projet a bien été ajouté'
    })
  })
})

//Updates a project
router.put('/', (req, res) => {
  const updatedProject = req.body

  if(!(updatedProject.id && updatedProject.name && updatedProject.image && updatedProject.description && updatedProject.tech)){
    return res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
  }
  
  const projet = new Projet(db, updatedProject)

  projet.update(err => {
    if(err){
      return res.status(500).send({
        error: `Une erreur est survenue lors de la mise à jour du projet ${updatedProject.id}: ${err}`
      })
    }

    res.send({
      success: `Le projet ${updatedProject.id} a bien été mis à jour`
    })
  })
})

//Deletes a project
router.delete('/:id', (req, res) => {
  const id = req.params.id
  const projet = new Projet(db)

  projet.id = id

  projet.delete(err => {
    if(err){
      res.status(500).send({
        error: `Une erreur est survenue lors de la suppresion du projet ${id}`
      })
      return
    }

    res.send({
      success: `Le projet ${id} a bien été supprimé`
    })
  })
})

module.exports = router