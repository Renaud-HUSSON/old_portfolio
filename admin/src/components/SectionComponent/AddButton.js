import { Button } from "react-bootstrap"

const AddButton = ({url, data, file, section, logged, update, create}) => {
  const handleClick = async () => {
    //Uploads the file (if it exists) to the images server
    if(file){
      const form = new FormData()
      form.append('image', file)
      form.append('path', section)
      
      const fileUpload = await fetch('/images/upload', {
        body: form,
        method: 'POST'
      })

      const json = await fileUpload.json()
      console.log(json)
    }
    
    //Headers for uploading datas
    const headers = new Headers()
    headers.append('Authorization', `Bearer ${logged.token}`)
    headers.append('Content-Type', 'application/json')
    
    //Uploads datas
    fetch(url, {
      headers: headers,
      body: JSON.stringify({
        ...data,
        image: `/images/${section}/${data.image}`
      }),
      method: update ? 'PUT' : create ? 'POST' :  'DELETE'
    })
  }
  
  return <Button onClick={handleClick} variant="dark">Valider</Button>
}

export default AddButton