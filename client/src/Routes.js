import { Route, Switch, useLocation } from "react-router-dom"
import About from "./pages/About"
import Competences from "./pages/Competences"
import Contact from "./pages/Contact"
import Projet from "./pages/Projet"
import Projets from "./pages/Projets"
import {AnimatePresence} from 'framer-motion'
import Login from "./pages/Login"
import ReactGA from 'react-ga';

const Routes = () => {
  const location = useLocation()

  ReactGA.initialize(process.env.REACT_APP_GA, {
    debug: false,
    titleCase: false,
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  })
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  return <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route path="/" component={About} exact/>
      <Route path="/competences" component={Competences} exact/>
      <Route path="/projets" component={Projets} exact/>
      <Route path="/projet/:id" component={Projet} exact/>
      <Route path="/contact" component={Contact} exact/>
      <Route path="/login" component={Login} exact/>
    </Switch>
  </AnimatePresence> 
}

export default Routes