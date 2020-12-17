import { useContext } from "react"
import styled from "styled-components"
import { FlashContext } from "../../../context/Flash"

const SubmitButton = ({url, data, options={}}) => {
  const [,setFlash] = useContext(FlashContext)
  
  const sendData = (e) => {
    e.preventDefault()
    const fetchOptions = {
      body: JSON.stringify(data),
      ...options
    }

    fetch(url, fetchOptions)
    .then(data => data.json())
    .then(json => {
      if(json.success || json.error){
        setFlash({
          active: true,
          ...json
        })
      }
    })
  }

  return <StyledButton>
    <button onClick={sendData}>Envoyer</button>
  </StyledButton>
}

const StyledButton = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  button {
    font-size: 1rem;
    padding: 0.375rem 2rem;
  }
`

export default SubmitButton