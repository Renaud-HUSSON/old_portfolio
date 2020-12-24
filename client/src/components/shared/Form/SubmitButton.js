import { useContext, useState } from "react"
import {Redirect} from 'react-router-dom'
import styled from "styled-components"
import { FlashContext } from "../../../context/Flash"

const SubmitButton = ({url, data, setData, options={}, redirectPath=window.location.pathname}) => {
  const [,setFlash] = useContext(FlashContext)
  const [redirect, setRedirect] = useState(false)
  
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
        if(json.success){
          //If the submit succeed, reset form inputs
          const resetData = {}
  
          for(let i = 0; i<Object.keys(data).length; i++){
            resetData[Object.keys(data)[i]] = ""
          }
  
          setData(resetData)
          setRedirect(true)
        }

        //Set flash state to active
        setFlash({
          active: true,
          ...json
        })
      }
    })
  }

  return <StyledButton>
    <button onClick={sendData}>Envoyer</button>
    {
      redirect
      ? <Redirect to={redirectPath} />
      : <></>
    }
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