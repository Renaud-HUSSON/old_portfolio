import { useEffect } from 'react'
import {Switch, Route, useLocation} from 'react-router-dom'
import About from './pages/About'
import SectionComponent from './pages/SectionComponent'
import useCheckLogged from './utils/checkLogged'

const Routes = () => {
  const location = useLocation()

  const logged = useCheckLogged()
  useEffect(() => {
    console.log(logged)
  }, [location.pathname, logged])
  
  return <Switch>
    <Route path="/admin/" component={About} exact />
    <Route path="/admin/:section" component={SectionComponent} exact />
  </Switch>
}

export default Routes