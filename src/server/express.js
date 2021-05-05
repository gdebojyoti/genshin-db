const express = require('express')
const fs = require('fs')
const path = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

// create express application
const app = express()

// import App component
const { default: App } = require('../shared')

// serve static assets
app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../../build-server')))

// for any other requests, send `index.html` as a response
app.use('*', (req, res) => {
  // read `index.html` file
  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../../build-server/index.html'), {
    encoding: 'utf8'
  })

  // get HTML string from the `App` component
  const appHTML = ReactDOMServer.renderToString(<App />)

  // populate `#app` element with `appHTML`
  indexHTML = indexHTML.replace('<div id="app" class="app"></div>', `<div id="app">${appHTML}</div>`)

  // set header and status
  res.contentType('text/html')
  res.status(200)

  return res.send(indexHTML)
})

const PORT = 8000

// run express server on port 9000
app.listen(PORT, () => {
  console.log(`Express server started at http://localhost:${PORT}`)
})
