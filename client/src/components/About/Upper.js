import styled from "styled-components"

const Upper = () => {
  return <StyledUpper>
    <p>Bienvenue sur mon portfolio, je m'appelle Renaud HUSSON, je suis en 1ère année de DUT Informatique à Blagnac et j'apprend la programmation web en autodidacte</p>
    <button>VOIR MES PROJETS</button>
  </StyledUpper>
}

const StyledUpper = styled.div`
  margin: auto;
  align-items: center;
  width: 50vw;
  padding-top: 20vh;

  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  button {
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