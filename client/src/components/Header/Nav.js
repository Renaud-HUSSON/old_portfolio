import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = ({setNav, nav}) => {
  return <StyledNav nav={nav}>
    <ul>
      <Link onClick={() => setNav(false)} to="/"><li>À PROPOS</li></Link>
      <Link onClick={() => setNav(false)} to="/projets"><li>PROJETS</li></Link>
      <Link onClick={() => setNav(false)} to="/competences"><li>COMPÉTENCES</li></Link>
      <Link onClick={() => setNav(false)} to="/contact"><li>ME CONTACTER</li></Link>
    </ul>
  </StyledNav>
}

const StyledNav = styled.nav`
  background: ${props => props.theme.colors.darkBlue};

  ul {
    display: flex;
    font-size: 1.6rem;

    a {
      padding: 1rem;
    }
  }

  @keyframes slidein {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 768px){
    height: calc(100vh - ${props => props.theme.navHeight});
    width: 100vw;
    position: absolute;
    top: ${props => props.theme.navHeight};
    transition: 0.5s ease;
    left: ${props => props.nav ? '0' : '100%'};
    opacity: ${props => props.nav ? 1 : 0};
    z-index: 10;

    ul {
      a {
        transform: translateX(100%);
      }
    }
    
    ${props => props.nav
      ?`ul {
        flex-direction: column;
        margin: auto;
        a{
          &:nth-child(1){
            animation: slidein 0.2s forwards;
            animation-delay: 0.1s;
          }
          
          &:nth-child(2){
            animation: slidein 0.2s forwards;
            animation-delay: 0.2s;
          }
          &:nth-child(3){
            animation: slidein 0.2s forwards;
            animation-delay: 0.3s;
          }
          &:nth-child(4){
            animation: slidein 0.2s forwards;
            animation-delay: 0.4s;
          }
        }
      }`
      :''
    }
  }
`

export default Nav