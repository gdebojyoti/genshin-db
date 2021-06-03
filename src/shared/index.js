import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
// import { Global, css } from '@emotion/react'

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
      {/* <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
          }
          html, body {
            width: 100%;
            height: 100%;
          }
        `}
      /> */}
    </Switch>
  )
}

export default App
