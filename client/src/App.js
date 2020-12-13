import { ThemeProvider } from "styled-components";
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
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
