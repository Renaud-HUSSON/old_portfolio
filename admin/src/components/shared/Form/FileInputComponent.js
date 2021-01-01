import { Form } from "react-bootstrap"

const FileInputComponent = ({label, name, setData}) => {
  const handleChange = (e) => {
    setData(data => ({
      ...data,
      [e.target.name]: e.target.files[0]
    }))
  }
  
  return <Form.Group>
    <Form.File onChange={handleChange} name={name} label={label}></Form.File>
  </Form.Group>
}

export default FileInputComponent