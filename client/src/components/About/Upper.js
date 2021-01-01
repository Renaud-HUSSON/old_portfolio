import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import styled from "styled-components"
import { slideInFromBottom } from '../../utils/animations'

const Upper = () => {
  const anim = slideInFromBottom(0.5, 0.2)
  
  return <StyledUpper variants={anim} initial="hidden" animate="visible" >
    <p>Bienvenue sur mon portfolio, je m'appelle Renaud HUSSON, je suis en 1ère année de DUT Informatique à Blagnac et j'apprends la programmation web en autodidacte</p>
    <Link to="/projets"><button>VOIR MES PROJETS</button></Link>
  </StyledUpper>
}

const StyledUpper = styled(motion.section)`
  position: relative;
  z-index: 2;
  margin: auto;
  align-items: center;
  width: 50vw;
  padding-top: 20vh;

  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px){
    width: 90vw;

    p {
      font-size: 1.2rem;
    }

    button {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 1200px){
    height: auto;
  }
`

export default Upper