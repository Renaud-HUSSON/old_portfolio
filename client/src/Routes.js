import { Route, Switch, useLocation } from "react-router-dom"
import About from "./pages/About"
import Competences from "./pages/Competences"
import Contact from "./pages/Contact"
import Projet from "./pages/Projet"
import Projets from "./pages/Projets"
import {AnimatePresence} from 'framer-motion'

const Routes = () => {
  const location = useLocation()
  
  return <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route path="/" component={About} exact/>
      <Route path="/competences" component={Competences} exact/>
      <Route path="/projets" component={Projets} exact/>
      <Route path="/projet/:id" component={Projet} exact/>
      <Route path="/contact" component={Contact} exact/>
    </Switch>
  </AnimatePresence> 
}

export default Routes