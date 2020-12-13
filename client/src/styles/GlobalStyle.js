import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.darkBlue};
  }

  * {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.white};
    font-family: 'Montserrat';
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`

export default GlobalStyle