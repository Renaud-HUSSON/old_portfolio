import styled from "styled-components"
import Experiences from "../components/Competences/Experiences"
import Parcours from "../components/Competences/Parcours"
import Skills from "../components/Competences/Skills"
import {motion} from 'framer-motion'
import { exitLeft, fadeIn, slideInFromTop } from "../utils/animations"
import {Helmet} from 'react-helmet-async'

const Competences = () => {
  const fade = fadeIn()
  const top = slideInFromTop()
  const left = exitLeft()
  
  return <StyledCompetences className="content" variants={left} initial={{...fade.hidden, ...top.hidden}} animate={{...fade.visible, ...top.visible}} exit="exit">
    <Helmet>
      <title>Renaud HUSSON | Mes compétences</title>
      <meta name="description" content="Cette partie de mon portfolio présente mes compétences, qui sont certaines technologies du développement web que je maitrise"/>
    </Helmet>
    <motion.section variants={slideInFromTop(undefined, undefined, 50)} initial="hidden" animate="visible">
      <h1>COMPÉTENCES</h1>
      <Skills />
    </motion.section>
    <motion.section variants={slideInFromTop(undefined, 0.15, 50)} initial="hidden" animate="visible">
      <h1>MON PARCOURS</h1>
      <Parcours />
    </motion.section>
    <motion.section variants={slideInFromTop(undefined, 0.3, 50)} initial="hidden" animate="visible">
      <h1>EXPÉRIENCES PROFESSIONNELLES</h1>
      <Experiences />
    </motion.section>
  </StyledCompetences>
}

const StyledCompetences = styled(motion.div)`
  > div {
    margin: 1rem 0rem;
  }
`

export default Competences