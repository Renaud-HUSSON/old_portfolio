import styled from "styled-components"
import { slideInFromTop } from "../../utils/animations"
import MotionLink from "../Motion/MotionLink"

const Nav = ({setNav, nav}) => {
  const anim = slideInFromTop(0.3)
  const anim1 = slideInFromTop(0.3, 0.1)
  const anim2 = slideInFromTop(0.3, 0.2)
  const anim3 = slideInFromTop(0.3, 0.3)
  
  return <StyledNav nav={nav}>
    <ul>
      <MotionLink setNav={setNav} anim={anim} to="/"><li>À PROPOS</li></MotionLink>
      <MotionLink setNav={setNav} anim={anim1} to="/projets"><li>PROJETS</li></MotionLink>
      <MotionLink setNav={setNav} anim={anim2} to="/competences"><li>COMPÉTENCES</li></MotionLink>
      <MotionLink setNav={setNav} anim={anim3} to="/contact"><li>ME CONTACTER</li></MotionLink>
    </ul>
  </StyledNav>
}

const StyledNav = styled.nav`
  background: ${props => props.theme.colors.darkBlue};
  ul {
    display: flex;
    font-size: 2.8vh;

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
    left: ${props => props.nav ? '0' : '100%'};
    opacity: ${props => props.nav ? 1 : 0};
    z-index: 10;
    transition: 0.3s ease;

    ul {

      a {
        transform: translateX(100%);
        font-size: 4vh;
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