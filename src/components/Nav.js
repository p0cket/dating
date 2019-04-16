import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Swipe from './Swipe'
function Users() {
  return <h2>Users page doesn't exist</h2>
}

function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile/">profile</Link>
            </li>
            <li>
              <Link to="/swipe/">Swipe</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/profile/" component={Profile} />
        <Route path="/swipe/" component={Swipe} />
      </div>
    </Router>
  )
}

export default Nav
