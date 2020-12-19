import { useState } from "react"
import styled from "styled-components"
import Form from "../shared/Form/Form"
import Input from "../shared/Form/Input"
import SubmitButton from "../shared/Form/SubmitButton"
import Textarea from "../shared/Form/Textarea"

const ContactForm = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    message: ''
  })

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  
  return <StyledContactForm>
    <h2>M'ENVOYER UN MESSAGE</h2>
    <div className="userinfos">
      <Input data={data} setData={setData} name="username" label="Nom:"/>
      <Input type="email" data={data} setData={setData} name="email" label="Email:"/>
    </div>
    <Textarea data={data} setData={setData} name="message" label="Message:"/>
    <SubmitButton
      url="/api/messages"
      options={{
        method: 'POST',
        headers: headers
      }}
      data={data}
      setData={setData}
    />
  </StyledContactForm>
}

const StyledContactForm = styled(Form)`
  width: 70%;

  > * {
    line-height: 2rem;
  }

  .userinfos {
    display: flex;

    .input:nth-child(1){
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 1200px){
    width: 85%;
  }

  @media screen and (max-width: 991px){
    width: 100%;
  }

  @media screen and (max-width: 768px){
    .userinfos {
      flex-direction: column;

      .input:nth-child(1) {
        margin-right: 0;
      }
    }
  }
`

export default ContactForm