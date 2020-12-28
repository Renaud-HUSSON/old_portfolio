require('dotenv').config()
const fetch = require('node-fetch');
const fs = require('fs')

const sitemap = async () => {
  //Static urls
  let content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://renaudhusson.fr/</loc>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://renaudhusson.fr/projets</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://renaudhusson.fr/competences</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://renaudhusson.fr/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`

  const headers = new fetch.Headers()
  headers.append('Authorization', `Bearer ${process.env.REACT_APP_PUBLIC_ACCESS_TOKEN}`)

  //Get all projects to fill the sitemap with dynamics urls
  const data = await fetch('https://renaudhusson.fr/api/projets', {
    headers: headers
  })

  const json = await data.text()

  const projets = JSON.parse(json)

  //Fill the sitemap
  for(const projet of projets){
    content += `
  <url>
    <loc>https://renaudhusson.fr/projet/${projet.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`
  }

  content += `</urlset>`

  fs.writeFile('./public/sitemap.xml', content, (err) => {
    if(err) return console.log(`Une erreur est survenue lors de la génération du sitemap: ${err}`)

    console.log('OK !')
  })
}



