import React from "react"
import { Form } from "react-bootstrap"
import useFetchData from '../hooks/useFetchData'
import d from '../../../data'

const SelectComponent = ({children, url, label, name, setData, data}) => {
  
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

  const selected = !items.loading 
  ? items.data.filter(item => {
    return item[d[name].single] === data[name]
  })[0]
  : ''
  
  return !items.loading && selected
  ?<Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" name={name} onChange={handleChange} value={selected[d[name].single]}>
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