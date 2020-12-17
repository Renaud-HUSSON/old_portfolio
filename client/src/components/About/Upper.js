import {Link} from 'react-router-dom'
import styled from "styled-components"

const Upper = () => {
  return <StyledUpper>
    <p>Bienvenue sur mon portfolio, je m'appelle Renaud HUSSON, je suis en 1ère année de DUT Informatique à Blagnac et j'apprend la programmation web en autodidacte</p>
    <Link to="/projets"><button>VOIR MES PROJETS</button></Link>
  </StyledUpper>
}

const StyledUpper = styled.section`
  margin: auto;
  align-items: center;
  width: 50vw;
  padding-top: 20vh;

  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  a {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px){
    width: 90vw;

    p {
      font-size: 1.4rem;
    } 

    button {
      font-size: 0.8rem;
    }
  }
`

export default Upper