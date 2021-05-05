import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import routes from './routes'

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }, index) => (
          <Route
            path={path}
            component={component}
            key={index}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default App
