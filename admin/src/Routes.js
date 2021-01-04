import {Switch, Route} from 'react-router-dom'
import About from './pages/About'
import ItemComponent from './pages/ItemComponent'
import SectionComponent from './pages/SectionComponent'

const Routes = () => {return <Switch>
    <Route path="/admin/" component={About} exact />
    <Route path="/admin/:section" component={SectionComponent} exact />
    <Route path="/admin/:section/:id" component={ItemComponent} exact />
  </Switch>
}

export default Routes