import styled from "styled-components"

const Footer = () => {
  return <StyledFooter>
    <a href="https://github.com/Renaud-HUSSON" target="_blank" rel="noreferrer">
      <img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt="Icone de GitHub"/>
    </a>
    <p>RENAUD HUSSON © 2020</p>
    <a href="https://www.linkedin.com/in/renaud-husson-7739841ba/" target="_blank" rel="noreferrer">
      <img src={`${process.env.PUBLIC_URL}/images/linkedin.svg`} alt="Icone de LinkedIn"/>
    </a>
  </StyledFooter>
}

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.theme.footerHeight};
  overflow: hidden;

  > * {
    color: ${props => props.theme.colors.darkBlue};
    font-weight: bold;
    margin: 0.5rem;
  }
`

export default Footer