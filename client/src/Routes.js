import { Route, Switch } from "react-router-dom"
import About from "./pages/About"
import Competences from "./pages/Competences"
import Contact from "./pages/Contact"
import Projet from "./pages/Projet"
import Projets from "./pages/Projets"

const Routes = () => {
  return <Switch>
    <Route path="/" component={About} exact/>
    <Route path="/competences" component={Competences} exact/>
    <Route path="/projets" component={Projets} exact/>
    <Route path="/projet/:id" component={Projet} exact/>
    <Route path="/contact" component={Contact} exact/>
  </Switch>
}

export default Routes