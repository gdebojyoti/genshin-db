import React from 'react'
import { Helmet } from 'react-helmet'

const MetaTags = props => {
  const {
    title = 'Genshin Impact Database',
    description = 'Database of items found in Genshin Impact video game'
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
