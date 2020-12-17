import Nav from "../Header/Nav"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useState } from "react"
import Burger from "../Header/Burger"

const Header = () => {
  const [nav, setNav] = useState(false)

  return <StyledHeader>
    <Link onClick={() => setNav(false)} to="/">RENAUD HUSSON</Link>
    <Nav setNav={setNav} nav={nav}/>
    <Burger setNav={setNav}/>
  </StyledHeader>
}

const StyledHeader = styled.header`
  font-size: 2rem;
  height: ${props => props.theme.navHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  
  * {
    font-family: 'Bebas Neue';
  }
`

export default Header