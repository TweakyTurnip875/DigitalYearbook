import { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Yearbooks from './pages/yearbooks'

export default class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <NavigationContainer />

          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/yearbooks' component={Yearbooks} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
