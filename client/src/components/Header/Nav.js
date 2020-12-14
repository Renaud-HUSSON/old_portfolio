import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = ({nav}) => {
  return <StyledNav nav={nav}>
    <ul>
      <Link to="/"><li>À PROPOS</li></Link>
      <Link to="/projets"><li>PROJETS</li></Link>
      <Link to="/competences"><li>COMPÉTENCES</li></Link>
      <Link to="/contact"><li>ME CONTACTER</li></Link>
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

  @media screen and (max-width: 768px){
    height: calc(100vh - ${props => props.theme.navHeight});
    width: 100vw;
    position: absolute;
    top: ${props => props.theme.navHeight};
    transition: 0.5s;
    left: ${props => props.nav ? '0' : '100%'};
    opacity: ${props => props.nav ? 1 : 0};
    z-index: 10;
    
    ul {
      flex-direction: column;
      margin: auto;
    }
  }
`

export default Nav