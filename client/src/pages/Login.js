import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'
import Form from '../components/shared/Form/Form'
import Input from '../components/shared/Form/Input'
import SubmitButton from '../components/shared/Form/SubmitButton'

const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const submitOptions = {
    method: 'POST',
    headers: headers
  }

  return <StyledLogin exit=" ">
    <Form>
      <Input label="Nom d'utilisateur:" data={data} name="username" setData={setData} />
      <Input type="password" label="Mot de passe:" data={data} name="password" setData={setData} />
      <SubmitButton url="/auth/login" options={submitOptions} data={data} setData={setData} redirect="/"/>
    </Form>
  </StyledLogin>
}

const StyledLogin = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    margin-bottom: 20vh;
    margin-left: 2rem;
    width: 30vw;

    > * {
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (max-width: 1200px){
    form {
      width: 45vw;
    }
  }

  @media screen and (max-width: 991px){
    form {
      width: 60vw;
    }
  }

  @media screen and (max-width: 768px){
    position: static;
    display: block;
    
    form {
      margin: auto;
      width: 90vw;
    }
  }
`

export default Login