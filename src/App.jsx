import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import Page from './pages/Page'
// import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import KhruangbinPage from './pages/KhruangbinPage'
import The90sFlavPage from './pages/The90sFlavPage'
import TwoFeetPage from './pages/TwoFeetPage'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/khruangbin">Khruangbin</Link>
          </li>
          <li>
            <Link to="the90sFlav">90sFlav</Link>
          </li>
          <li>
            <Link to="/twoFeet">Two Feet</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/khruangbin" component={KhruangbinPage}></Route>
        <Route exact path="/the90sFlav" component={The90sFlavPage}></Route>
        <Route exact path="/twoFeet" component={TwoFeetPage}></Route>

        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
