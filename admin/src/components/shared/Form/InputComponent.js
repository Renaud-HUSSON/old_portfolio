import { Form } from "react-bootstrap"

const InputComponent = ({label, type="text", name, setData, multiline=false}) => {
  const handleChange = (e) => {
    setData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }
  
  return <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    {
      multiline
      ?<Form.Control as="textarea" rows={6} type={type} onChange={handleChange} name={name}/>
      :<Form.Control type={type} onChange={handleChange} name={name}/>
    }
  </Form.Group>
}

export default InputComponent