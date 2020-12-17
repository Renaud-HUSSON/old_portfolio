import styled from "styled-components"

const Textarea = ({name, label, setData, data}) => {
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  
  return <StyledTextarea className="textarea">
    <label htmlFor={name}>{label}</label><br/>
    <textarea onChange={handleChange} name={name} id={name}></textarea>
  </StyledTextarea>
}

const StyledTextarea = styled.div`
  textarea {
    width: 100%;
    min-height: 250px;
    resize: none;
  }
`

export default Textarea