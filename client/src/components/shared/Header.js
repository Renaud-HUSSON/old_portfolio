import Nav from "../Header/Nav"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Burger from "../Header/Burger"

const Header = () => {
  const [nav, setNav] = useState(false)

  useEffect(() => {
    if(nav){
      document.body.setAttribute('noscroll', '')
    }else{
      document.body.removeAttribute('noscroll')
    }
  }, [nav])

  return <StyledHeader>
    <Link onClick={() => setNav(false)} to="/">RENAUD HUSSON</Link>
    <Nav setNav={setNav} nav={nav}/>
    <Burger setNav={setNav}/>
  </StyledHeader>
}

const StyledHeader = styled.header`
  font-size: clamp(16px, 3.2vh, 30px);
  height: ${props => props.theme.navHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  
  * {
    font-family: 'Bebas Neue';
  }

  @media screen and (max-height: 500px){
    height: 40px;
  }
`

export default Header