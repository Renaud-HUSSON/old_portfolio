import styled from "styled-components"
import Lower from "../components/About/Lower"
import Upper from "../components/About/Upper"
import {motion} from 'framer-motion'
import { exitLeft, fadeIn } from "../utils/animations"

const About = () => {  
  const anim = exitLeft()
  const fade = fadeIn(1)
  
  return <StyledAbout variants={anim} initial={fade.hidden} animate={fade.visible} exit="exit" >
    <Upper />
    <Lower />
  </StyledAbout>
}

const StyledAbout = styled(motion.div)`
  height: calc(100vh - ${props => props.theme.navHeight} - ${props => props.theme.footerHeight});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default About