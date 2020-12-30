import { useContext, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import NavComponent from "./components/shared/NavComponent";
import { LoggedContext } from "./contexts/Logged";
import Routes from "./Routes";

const App = () => {
  const [logged,] = useContext(LoggedContext)

  const redirect = () => {
    window.location.pathname = '/login'
    return
  }
  
  return logged
  ? logged.logged
    ?<div className="App">
      <NavComponent />
      <Routes />
    </div>
    : redirect()
  :<></>
}

export default App;
