import styled from "styled-components"
import Experiences from "../components/Competences/Experiences"
import Parcours from "../components/Competences/Parcours"
import Skills from "../components/Competences/Skills"
import {motion} from 'framer-motion'

const Competences = () => {
  return <StyledCompetences className="content" exit=" ">
    <h1>COMPÉTENCES</h1>
    <Skills />
    <h1>MON PARCOURS</h1>
    <Parcours />
    <h1>EXPÉRIENCES PROFESSIONNELLES</h1>
    <Experiences />
  </StyledCompetences>
}

const StyledCompetences = styled(motion.div)`
  > div {
    margin: 1rem 0rem;
  }
`

export default Competences