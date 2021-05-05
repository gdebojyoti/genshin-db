import React from 'react'
import { withRouter } from 'react-router-dom'

const Character = ({ match, ...rest }) => {
  const {
    params: {
      id = 'meow'
    } = {}
  } = match || {}

  return (
    <div>
      This is a sample character page.
      <br />
      It belongs to {id}.
    </div>
  )
}

export default withRouter(Character)
