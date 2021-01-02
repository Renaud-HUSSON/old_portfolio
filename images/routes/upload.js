const router = require('express').Router()
const sharp = require('sharp')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
  const access_token = req.cookies.access_token

  if(!access_token){
    return res.status(401).send({})
  }

  const verified = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if(err){
      return res.status(401).send({})
    }

    if(decoded.role !== 'admin'){
      return res.status(401).send({})
    }
  })
  
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
      sharp(path).resize(650, 365).toFile(thumbnailPath, (err, info) => {
        if(err){
          return res.status(500).send({
            error: `Une erreur est survenue lors du redimensionnement de l'image: ${err}`
          })
        }
  
        console.log(info)
      })
    }
    
    res.send({
      success: 'L\'image a bien été mise en ligne'
    })
  })

})

module.exports = router