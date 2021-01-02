import { Form } from "react-bootstrap"

const FileInputComponent = ({label, name, setData, setFile}) => {
  const handleChange = (e) => {
    setFile(e.target.files[0])
    
    setData(data => ({
      ...data,
      [e.target.name]: e.target.files[0].name
    }))
  }
  
  return <Form.Group>
    <Form.File onChange={handleChange} name={name} label={label}></Form.File>
  </Form.Group>
}

export default FileInputComponent