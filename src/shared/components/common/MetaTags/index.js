import React from 'react'
import { Helmet } from 'react-helmet'

const MetaTags = props => {
  const {
    title = 'Genshin Impact Game Database | Fan Project',
    description = 'Database of characters & items found in Genshin Impact video game. To help players on PC, Switch, Playstation, Android & iOS platforms'
  } = props
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='X-UA-Compatible' content='ie=edge' />
      <meta name='description' content={description} />
    </Helmet>
  )
}

export default MetaTags
