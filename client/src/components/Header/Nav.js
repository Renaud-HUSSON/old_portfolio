import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = ({nav}) => {
  return <StyledNav nav={nav}>
    <ul>
      <Link><li>À PROPOS</li></Link>
      <Link><li>PROJETS</li></Link>
      <Link><li>COMPÉTENCES</li></Link>
      <Link><li>ME CONTACTER</li></Link>
    </ul>
  </StyledNav>
}

const StyledNav = styled.nav`
ul {
  display: flex;
  font-size: 1.6rem;

  a {
    padding: 1rem;
  }
}

@media screen and (max-width: 768px){
  height: 100vh - ${props => props.theme.navHeight};
  width: 100vw;
  position: absolute;
  top: ${props => props.theme.navHeight};
  transition: 0.5s;
  left: ${props => props.nav ? '0' : '-100%'};
  opacity: ${props => props.nav ? 1 : 0};
  z-index: 10;
  
  ul {
    flex-direction: column;
    margin: auto;
  }
}
`

export default Nav