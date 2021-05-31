import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import express from 'express'
import fs from 'fs'
import path from 'path'

import App from '../shared'

// import webpack from 'webpack'
// import clientConfig from '../../webpack/client'

// const compiler = webpack(clientConfig)
// compiler.run((err, stats) => {
//   if (err) {
//     console.log('==== err', err)
//     throw err
//   }
//   console.log('stats', stats)
// })

// create express application
const app = express()

console.log('__dirname', path.resolve(__dirname, '../build-server/index.html'))

// serve static assets
app.get(/\.(js|css|map|ico|png)$/, express.static(path.resolve(__dirname, '../build-client')))

// for any other requests, send `index.html` as a response
app.use('*', (req, res) => {
  // read `index.html` file
  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../build-server/index.html'), {
    encoding: 'utf8'
  })

  console.log('\nreq.url', req.url)
  console.log('req.originalUrl', req.originalUrl)
  console.log('req.path', req.path)

  // get HTML string from the `App` component
  const appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl}>
      <App />
    </StaticRouter>
  )
  const helmet = Helmet.renderStatic()

  // populate `#app` element with `appHTML`
  indexHTML = indexHTML.replace('<div id="app" class="app"></div>', `<div id="app" class="app">${appHTML}</div>`)
  // insert meta tags
  indexHTML = indexHTML.replace('$$METATAGS$$', `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  `)

  // set header and status
  res.contentType('text/html')
  res.status(200)

  return res.send(indexHTML)
})

const PORT = 8080

// run express server on port 9000
app.listen(PORT, () => {
  console.log(`Express server started at http://localhost:${PORT}`)
})
