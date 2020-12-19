import styled from "styled-components"

const Textarea = ({name, label, setData, data}) => {
  const resize = (e) => {
    const element = e.target

    //Resize the textarea if its content is too big
    if(element.clientHeight < element.scrollHeight){
      element.style.height = element.scrollHeight + 5 + "px"
    }
  }
  
  //Updates the data state
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
    resize(e)
  }
  
  return <StyledTextarea className="textarea">
    <label htmlFor={name}>{label}</label><br/>
    <textarea value={data[name]} onChange={handleChange} name={name} id={name}></textarea>
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