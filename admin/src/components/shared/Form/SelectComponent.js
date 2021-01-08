import React, { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import useFetchData from '../hooks/useFetchData'
import d from '../../../data'

/**
 * 
 * @param {url} String - URL to fetch data from
 * @param {label} String - The Label we want to display for our select
 * @param {name} String - Property from the data we want as value
 *  
 */
const SelectComponent = ({children, url, label, name, setData, data, update}) => {
  const [selected, setSelected] =  useState()
  
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

  useEffect(() => {
    //If items have been fetched assign the correct selected value
    if(!items.loading){
      //If we update (not add) an item
      if(!update){
        const selectedItem = items.data.filter(item => {
          return item[d[name].single] == data[name]
        })
        if(selectedItem.length !== 0){
          setSelected({
            value: selectedItem[0][d[name].single]
          })
        }
      }else{
        setSelected(data[name])
      }
    }
  }, [data, items, name, update])

  console.log(selected)
  
  return !items.loading && selected !== undefined
  ?<Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" name={name} onChange={handleChange} value={selected.value}>
        {
          update
          ?<option value="">Sélectionnez une valeur</option>
          : ''
        }
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