import styled from "styled-components"

const About = () => {
  return <StyledAbout>
    <div className="upper">
      <p>Bienvenue sur mon portfolio, je m'appelle Renaud HUSSON, je suis en 1ère année de DUT Informatique à Blagnac et j'apprend la programmation web en autodidacte</p>
      <button>VOIR MES PROJETS</button>
    </div>
    <div className="lower">
      <img className="wave" src={`${process.env.PUBLIC_URL}/images/wave.svg`} alt="wave"/>
      <img className="devices" src={`${process.env.PUBLIC_URL}/images/devices.svg`} alt="devices"/>
    </div>
  </StyledAbout>
}

const StyledAbout = styled.div`
  height: calc(100vh - ${props => props.theme.navHeight} - ${props => props.theme.footerHeight});
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .upper {
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
  }

  .lower {
    position: relative;
    background: ${props => props.theme.colors.white};
    flex: 1;

    .wave {
      border: none;
      outline: none;
    }

    .devices {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  @media screen and (max-width: 768px){
    .upper {
      width: 90vw;

      p {
        font-size: 1.4rem;
      } 

      button {
        font-size: 0.8rem;
      }
    }

    .lower {
      .devices {
        display: none;
      }
    }
  }
`

export default About