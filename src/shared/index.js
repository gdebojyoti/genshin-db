import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import routes from './routes'

const App = () => {
  return (
    <Switch>
      {routes.map(({ path, component, isExact }, index) => (
        <Route
          path={path}
          component={component}
          exact={isExact}
          key={index}
        />
      ))}
    </Switch>
  )
}

export default App
