import Nav from "../Header/Nav"
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Header = () => {
  return <StyledHeader>
    <Link>RENAUD HUSSON</Link>
    <Nav />
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
    font-family: 'Bebas Neue' !important;
  }
`

export default Header