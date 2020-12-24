import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.white};
    font-family: 'Montserrat';
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${props => props.theme.colors.darkBlue};
    overflow-x: hidden;
  }

  .page-content {
    position: relative;
    min-height: calc(100vh - ${props => props.theme.navHeight} - ${props => props.theme.footerHeight});

    .content {
      width: 70vw;
      margin: auto;
    }
  }

  h1, h2 {
    padding: 1rem 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  input, textarea {
    color: ${props => props.theme.colors.darkBlue};
    padding: 0rem 1rem;
  }

  textarea {
    padding: 1rem;
  }

  button {
    padding: 1rem;
    border: 2px solid ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.darkBlue};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.darkBlue};
    }
  }

  @media screen and (max-width: 768px){
    h1 {
      font-size: 1.9rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    .page-content .content {
      width: 90vw;
    }
  }
`

export default GlobalStyle