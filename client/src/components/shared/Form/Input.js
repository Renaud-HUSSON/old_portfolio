import styled from "styled-components"

const Input = ({name, label, setData, data, type="text"}) => {
  const handleClick = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }
  
  return <StyledInput className="input">
    <label htmlFor={name}>{label}</label><br/>
    <input onChange={handleClick} id={name} name={name} type={type} value={data[name]}/>
  </StyledInput>
}

const StyledInput = styled.div`
  flex: 1;
  
  input {
    width: 100%;
    height: 32px;
  }
`

export default Input