const express = require('express')
const Database = require('../../config/db')
const Projet = require('../../models/projet')
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
    res.send([...results])
  })
  // res.send(projet.read_all())
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
      res.status(400).send({
        error: `Le projet ${id} n'existe pas`
      })
      return
    }
    res.send(...results)
  })
})

//Creates a project
router.post('/', (req, res) => {
  const newProject = req.body
  
  if(!(newProject.name && newProject.description && newProject.tech)){
    res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
    return
  }

  const projet = new Projet(db, newProject)

  projet.create((err) => {
    if(err){
      res.send({
        error: `Une erreur est survenue lors de la création du projet: ${err}`
      })
      return
    }

    res.send({
      success: 'Le projet a bien été ajouté'
    })
  })
})

//Updates a project
router.put('/', (req, res) => {
  const updatedProject = req.body

  if(!(updatedProject.id && updatedProject.name && updatedProject.description && updatedProject.tech)){
    res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
    return
  }
  
  const projet = new Projet(db, updatedProject)

  projet.update((err, results) => {
    if(err){
      res.status(500).send({
        error: `Une erreur est survenue lors de la mise à jour du projet ${updatedProject.id}: ${err}`
      })
      return
    }

    console.log(results)
    res.send({
      success: `Le projet ${updatedProject.id} a bien été mis à jour`
    })
  })
})

module.exports = router