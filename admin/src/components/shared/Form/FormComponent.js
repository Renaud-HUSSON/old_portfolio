import { cloneElement } from "react"
import { Children, useContext } from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { LoggedContext } from "../../../contexts/Logged"
import usePostData from '../hooks/usePostData'

const FormComponent = ({children, url}) => {
  const [logged, ] = useContext(LoggedContext)
  const [data, setData] = useState({})
  
  const handleClick = () => {
    const headers = new Headers()
    headers.append('Authorization', `Bearer ${logged.token}`)
    headers.append('Content-Type', 'application/json')
    
    fetch(url, {
      headers: headers,
      body: data
    })
  }
  
  return <Form>
    {
      Children.map(children, children => {
        return cloneElement(children, {setData: setData})
      })
      
    }
    <Button onClick={handleClick} variant="dark">Valider</Button>
  </Form>
}

export default FormComponent