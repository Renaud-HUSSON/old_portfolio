import { ThemeProvider } from "styled-components";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import GlobalStyle from "./styles/GlobalStyle";
import theme from './styles/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Header />
          <div className="page-content">
            
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
