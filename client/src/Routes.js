import { Route, Switch } from "react-router-dom"
import About from "./pages/About"
import Competences from "./pages/Competences"

const Routes = () => {
  return <Switch>
    <Route path="/" component={About} exact/>
    <Route path="/competences" component={Competences} exact/>
  </Switch>
}

export default Routes