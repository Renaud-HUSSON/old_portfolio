import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = () => {
  return <StyledNav>
    <ul>
      <Link><li>À PROPOS</li></Link>
      <Link><li>PROJETS</li></Link>
      <Link><li>COMPÉTENCES</li></Link>
      <Link><li>ME CONTACTER</li></Link>
    </ul>
  </StyledNav>
}

const StyledNav = styled.ul`
ul {
  display: flex;
  font-size: 1.6rem;

  a {
    padding: 1rem;
  }
}
`

export default Nav