import styled from "styled-components"
import Lower from "../components/About/Lower"
import Upper from "../components/About/Upper"

const About = () => {
  return <StyledAbout>
    <Upper />
    <Lower />
  </StyledAbout>
}

const StyledAbout = styled.div`
  height: calc(100vh - ${props => props.theme.navHeight} - ${props => props.theme.footerHeight});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default About