import { cloneElement, useRef } from "react"
import { Children, useContext } from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { LoggedContext } from "../../../contexts/Logged"

const FormComponent = ({children, url, section, create=true, update=false}) => {
  const [logged, ] = useContext(LoggedContext)
  const [data, setData] = useState({})
  const [file, setFile] = useState()

  const form = useRef()
  
  const handleClick = async () => {
    //Uploads the file the the images server
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
    
    //Headers for uploading the skill
    const headers = new Headers()
    headers.append('Authorization', `Bearer ${logged.token}`)
    headers.append('Content-Type', 'application/json')
    
    //Uploads the skill
    fetch(url, {
      headers: headers,
      body: JSON.stringify({
        ...data,
        image: `/images/${section}/${data.image}`
      }),
      method: update ? 'PUT' : create ? 'POST' :  'DELETE'
    })
  }
  
  return <Form encType="multipart/form-data" ref={form}>
    {
      Children.map(children, children => {
        return cloneElement(children, {setData: setData, setFile: setFile})
      })
      
    }
    <Button onClick={handleClick} variant="dark">Valider</Button>
  </Form>
}

export default FormComponent