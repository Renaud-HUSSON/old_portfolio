import { Route, Switch } from "react-router-dom"
import About from "./pages/About"

const Routes = () => {
  return <Switch>
    <Route path="/" component={About}/>
  </Switch>
}

export default Routes