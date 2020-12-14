import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.darkBlue};
    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.white};
    font-family: 'Montserrat';
  }

  .page-content {
    min-height: calc(100vh - ${props => props.theme.navHeight} - ${props => props.theme.footerHeight});
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button {
    padding: 1rem;
    border: 2px solid ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.darkBlue};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      ${'' /* border: 2px solid ${props => props.theme.colors.darkBlue}; */}
      background: ${props => props.theme.colors.lightBlue};
      ${'' /* color: ${props => props.theme.colors.darkBlue}; */}
    }
  }
`

export default GlobalStyle