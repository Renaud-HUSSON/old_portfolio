import { Form } from "react-bootstrap"

const InputComponent = ({label, type="text", name, setData}) => {
  const handleChange = (e) => {
    setData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }
  
  return <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control type={type} onChange={handleChange} name={name}/>
  </Form.Group>
}

export default InputComponent