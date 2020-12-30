import {Switch, Route} from 'react-router-dom'
import About from './pages/About'
import SectionComponent from './pages/SectionComponent'

const Routes = () => {return <Switch>
    <Route path="/admin/" component={About} exact />
    <Route path="/admin/:section" component={SectionComponent} exact />
  </Switch>
}

export default Routes