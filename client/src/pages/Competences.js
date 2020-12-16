import styled from "styled-components"
import Experiences from "../components/Competences/Experiences"
import Parcours from "../components/Competences/Parcours"
import Skills from "../components/Competences/Skills"

const Competences = () => {
  return <StyledCompetences className="content">
    <h1>COMPÉTENCES</h1>
    <Skills />
    <h1>PARCOURS</h1>
    <Parcours />
    <h1>EXPÉRIENCES PROFESSIONNELLES</h1>
    <Experiences />
  </StyledCompetences>
}

const StyledCompetences = styled.div`
  > div {
    margin: 1rem 0rem;
  }
`

export default Competences