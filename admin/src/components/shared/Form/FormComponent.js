import { cloneElement, useEffect } from "react"
import { Children, useContext } from "react"
import { useState } from "react"
import { Form } from "react-bootstrap"
import { LoggedContext } from "../../../contexts/Logged"
import d from '../../../data.js'
import AddButton from "../../SectionComponent/AddButton"

const FormComponent = ({children, url, section, create=true, update=false, defaultValue={}}) => {
  const [logged, ] = useContext(LoggedContext)
  const [data, setData] = useState(d[section].data)
  const [file, setFile] = useState()

  useEffect(() => {
    if(defaultValue.length !== 0 && update){
      setData(defaultValue)
    }
  }, [defaultValue, update])

  return <Form encType="multipart/form-data">
    {
      Children.map(children, children => {
        return cloneElement(children, {setData: setData, data: data, setFile: setFile, update: update})
      })
    }
    <AddButton url={url} data={data} file={file} section={section} logged={logged} update={update} create={create}/>
  </Form>
}

export default FormComponent