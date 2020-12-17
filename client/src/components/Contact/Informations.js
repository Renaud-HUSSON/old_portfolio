import styled from 'styled-components'

const Informations = () => {
  return <StyledInformations>
    <h2>COMMENT ME JOINDRE</h2>
    <p>email: renaudhusson09@gmail.com</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/renaud-husson-7739841ba/">Renaud HUSSON</a></p>
    <p>GitHub: <a href="https://github.com/Renaud-HUSSON">Renaud-HUSSON</a></p>
  </StyledInformations>
}

const StyledInformations = styled.div`
  line-height: 2rem;
`

export default Informations