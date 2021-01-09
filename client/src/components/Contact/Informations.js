import styled from 'styled-components'

const Informations = () => {
  return <StyledInformations>
    <h2>COMMENT ME JOINDRE</h2>
    <p>email: <a href="mailto:renaudhusson09@gmail.com">renaudhusson09@gmail.com</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/renaud-husson-7739841ba/">Renaud HUSSON</a></p>
    <p>GitHub: <a href="https://github.com/Renaud-HUSSON">Renaud-HUSSON</a></p>
  </StyledInformations>
}

const StyledInformations = styled.address`
  line-height: 2rem;
  font-style: normal;

  a {
    color: lightblue;
  }
`

export default Informations