const router = require('express').Router()
const sharp = require('sharp')
const verifyAccess = require('../utils/verifyAccess')

router.post('/', async (req, res) => {
  //Verify that the user is authorized to upload an image
  const verified = await verifyAccess(req)

  if(!verified.correct){
    return res.status(401).send()
  } 
  
  const image = req.files.image
  const path = `/images/images/${req.body.path}/${image.name}`
  
  //Move the image to the corresponding image folder
  image.mv(path, err => {
    if(err){
      return res.status(500).send({
        error: `Une erreur est survenue lors de la mise en ligne de l'image: ${err}`
      })
    }

    //Build the thumbnail path
    const thumbnailPath = `/images/images/${req.body.path}/${image.name.replace(/^(.*)([.](jpg|png|jpeg))/, '$1-thumbnail$2')}`
    
    //Creates a thumbnail if the image is different from the initial path
    if(path !== thumbnailPath){
      sharp(path).resize(650, 365).toFile(thumbnailPath, (err) => {
        if(err){
          return res.status(500).send({
            error: `Une erreur est survenue lors du redimensionnement de l'image: ${err}`
          })
        }
      })
    }
    
    res.send({
      success: 'L\'image a bien été mise en ligne'
    })
  })

})

module.exports = router