import React from "react"
import { Form } from "react-bootstrap"
import useFetchData from '../hooks/useFetchData'

const SelectComponent = ({children, url, label, name, setData}) => {
  //Fetch options
  const items = useFetchData(url)

  //get the option element to map through items and append options
  const option = React.Children.toArray(children)[0]
  
  const handleChange = (e) => {
    setData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }
  
  return !items.loading
  ?<Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" name={name} onChange={handleChange}>
        {
          items.data.map((item, i) => {
            return React.cloneElement(option, {item: item, key: i})
          })
        }
      </Form.Control>
    </Form.Group>
  :<></>
}

export default SelectComponent