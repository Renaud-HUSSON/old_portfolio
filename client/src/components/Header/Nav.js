import { useCallback, useContext } from "react"
import styled from "styled-components"
import MotionLink from "../Motion/MotionLink"
import {LoggedContext} from '../../context/Logged'
import {FlashContext} from '../../context/Flash'

const Nav = ({setNav, nav}) => {
  
  const [logged, setLogged] = useContext(LoggedContext)
  const [, setFlash] = useContext(FlashContext)
  
  const logout = useCallback(async () => {
    const data = await fetch('/auth/logout')
    const json = await data.json()

    setFlash({active: true, ...json})
    setLogged(false)
  }, [setFlash, setLogged])
  
  return <StyledNav nav={nav}>
    <ul>
      <MotionLink setNav={setNav} to="/"><li>À PROPOS</li></MotionLink>
      <MotionLink setNav={setNav} to="/projets"><li>PROJETS</li></MotionLink>
      <MotionLink setNav={setNav} to="/competences"><li>COMPÉTENCES</li></MotionLink>
      <MotionLink setNav={setNav} to="/contact"><li>ME CONTACTER</li></MotionLink>
      {
        logged
        ? <>
            <button className="logout-button" onClick={() => window.location.pathname = '/admin'}><li>ADMIN</li></button> 
            <button className="admin-button" onClick={logout}><li>Logout</li></button>
          </>
        : <></>
      }
    </ul>
  </StyledNav>
}

const StyledNav = styled.nav`
  background: ${props => props.theme.colors.darkBlue};
  ul {
    display: flex;
    
    > * {
      font-size: 1.6rem;
    }

    a {
      padding: 1rem;
    }

    .logout-button, .admin-button {
      border: none;

      &:hover {
        background: ${props => props.theme.colors.darkBlue}
      }

      li {
        text-align: left;
      }
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
    display: ${props => props.nav ? 'block' : 'none'};
    opacity: ${props => props.nav ? '0' : '100'};
    left: ${props => props.nav ? '0' : '100%'};
    opacity: ${props => props.nav ? 1 : 0};
    z-index: 10;
    transition: 0.3s ease;
    overflow-y: scroll;

    ul {
      a, .logout-button, .admin-button {
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
        .logout-button, .admin-button {
          animation: slidein 0.2s forwards;
        }
        .logout-button {
          animation-delay: calc(0.5s);
        }
        .admin-button {
          animation-delay: calc(0.6s);  
        }
      }`
      :''
    }
  }
`

export default Nav