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

  .page-content {
    min-height: calc(100vh - ${props => props.theme.navHeight} - ${props => props.theme.footerHeight})
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`

export default GlobalStyle