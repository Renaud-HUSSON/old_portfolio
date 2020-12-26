const verifyAccessToken = require("../utils/verifyAccessToken")
const fetch = require('node-fetch')

module.exports = async (req, res, next) => {
  const auth = req.headers.authorization
  const auth_regex = /^Bearer [^\s]+$/

  if(!auth || !auth.match(auth_regex)){
    res.status(403).send('Access denied')
  }

  const token = auth.split(' ')[1]

  const verified = await verifyAccessToken(token)

  if(!verified.valid){
    res.status(403).send('Access denied')
  }

  const body_options = {
    endpoint: req.originalUrl,
    method: req.method,
    role: verified.content.role
  }

  const headers_options = new fetch.Headers()
  headers_options.append('content-type', 'application/json')
  
  const perms = await fetch(`http://auth:8082/auth/perms`, {
    body: JSON.stringify(body_options),
    headers: headers_options,
    method: 'POST',
  })

  const json = await perms.json()

  if(!json){
    return res.status(403).send()
  }

  next()
}