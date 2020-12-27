import { ThemeProvider } from "styled-components";
import Flash from "./components/shared/Flash";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Routes from "./Routes";
import GlobalStyle from "./styles/GlobalStyle";
import theme from './styles/theme'
import {HelmetProvider} from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Flash />
        <div className="App">
          <Header />
          <div className="page-content">
            <Routes />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
