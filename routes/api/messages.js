const express = require('express')
const router = express.Router()
const Message = require('../../models/Message')
const Database = require('../../config/db')

const database = new Database()
const db = database.connect()

//Gets all messages
router.get('/', (_, res) => {
  const message = new Message(db)

  message.read_all((err, results) => {
    if(err){
      res.send({
        error: `Une erreur est survenue lors de la récupération des messages: ${err}`
      })
      return
    }

    res.send({
      success: [...results]
    })
  })
})

//Get a single message
router.get('/:id', (req, res) => {
  const message = new Message(db)
  const id = req.params.id

  message.id = id

  message.read_single((err, results) => {
    if(err){
      console.error(`Erreur lors de la récupération du message n°${id}: ${err}`)
      return
    }

    if(results.length === 0){
      console.error(`Le message ${id} n'existe pas`)
      return
    }

    res.send(...results)
  })
})

//Creates a message
router.post('/', (req, res) => {
  const newMessage = req.body

  if(!(newMessage.email && newMessage.message)){
    res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
    return
  }

  const message = new Message(db, newMessage)

  message.create((err) => {
    if(err){
      res.status(500).send({
        error: `Une erreur est survenue lors de la création du message: ${err}`
      })
      return
    }

    res.send({
      success: 'Le message a bien été ajouté'
    })
  })
})

//Updates a message
router.put('/', (req, res) => {
  const updatedMessage = req.body

  if(!(updatedMessage.id && updatedMessage.email && updatedMessage.message)){
    res.status(400).send({
      error: 'Un ou plusieurs champs ne sont pas valides'
    })
    return
  }

  const message = new Message(db, updatedMessage)

  message.update(err => {
    if(err){
      res.status(500).send({
        error: `Une erreur est survenue lors de la mise à jour du message ${updatedMessage.id}: ${err}`
      })
      return
    }

    res.send({
      success: `Le message ${updatedMessage.id} a bien été mis à jour`
    })
  })
})

router.delete('/', (req, res) => {
  const deleteMessage = req.body

  if(!deleteMessage.id){
    res.status(400).send({
      error: 'Un id est nécessaire pour pouvoir supprimer un message'
    })
    return
  }

  const message = new Message(db, deleteMessage)

  message.delete(err => {
    if(err){
      res.status(500).send({
        error: `Une erreur est survenue lors de la suppresion du message ${deleteMessage.id}`
      })
      return
    }

    res.send({
      success: `Le projet ${deleteMessage.id} a bien été supprimé`
    })
  })
})

module.exports = router