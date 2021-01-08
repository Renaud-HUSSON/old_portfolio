import { useContext } from "react"
import { Button } from "react-bootstrap"
import { AlertContext } from "../../contexts/Alert"

const AddButton = ({url, data, file, section, logged, update, create, handleClose}) => {
  const [, setAlert] = useContext(AlertContext)
  
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
    const query = await fetch(url, {
      headers: headers,
      body: JSON.stringify({
        ...data,
        image: !update ? `/images/${section}/${data.image}` : data.image
      }),
      method: update ? 'PUT' : create ? 'POST' :  'DELETE'
    })

    const json = await query.json()

    setAlert({
      active: true,
      content: json,
      redirect: `/admin/${section}`
    })

    if(handleClose){
      handleClose()
    }
  }
  
  return <Button onClick={handleClick} variant="dark">Valider</Button>
}

export default AddButton