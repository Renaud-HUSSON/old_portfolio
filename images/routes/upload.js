const router = require('express').Router()

router.post('/', async (req, res) => {
  const image = req.files.image
  const path = `/images/images/${req.body.path}/${image.name}`
  
  //Move the image to the corresponding image folder
  image.mv(path, err => {
    if(err){
      return res.status(500).send({
        error: `Une erreur est survenue lors de la mise en ligne de l'image: ${err}`
      })
    }

    res.send({
      success: 'L\'image a bien été mise en ligne'
    })
  })

})

module.exports = router