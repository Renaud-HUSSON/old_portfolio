import styled from "styled-components"
import Experiences from "../components/Competences/Experiences"
import Parcours from "../components/Competences/Parcours"
import Skills from "../components/Competences/Skills"
import {motion} from 'framer-motion'
import { exitLeft, fadeIn, slideInFromTop } from "../utils/animations"

const Competences = () => {
  const fade = fadeIn()
  const top = slideInFromTop()
  const left = exitLeft()
  
  return <StyledCompetences className="content" variants={left} initial={{...fade.hidden, ...top.hidden}} animate={{...fade.visible, ...top.visible}} exit="exit">
    <motion.div variants={slideInFromTop(undefined, undefined, 50)} initial="hidden" animate="visible">
      <h1>COMPÉTENCES</h1>
      <Skills />
    </motion.div>
    <motion.div variants={slideInFromTop(undefined, 0.15, 50)} initial="hidden" animate="visible">
      <h1>MON PARCOURS</h1>
      <Parcours />
    </motion.div>
    <motion.div variants={slideInFromTop(undefined, 0.3, 50)} initial="hidden" animate="visible">
      <h1>EXPÉRIENCES PROFESSIONNELLES</h1>
      <Experiences />
    </motion.div>
  </StyledCompetences>
}

const StyledCompetences = styled(motion.div)`
  > div {
    margin: 1rem 0rem;
  }
`

export default Competences