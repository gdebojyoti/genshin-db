import React from 'react'
import { withRouter } from 'react-router-dom'

import img from '../../assets/characters/portraits/albedo.png'
import {
  wrapperStyle
} from './style'

const Character = ({ match, ...rest }) => {
  const {
    params: {
      id
    } = {}
  } = match || {}

  // character id is mandatory
  if (!id) {
    return (
      <div>
        No character name provided!
      </div>
    )
  }

  return (
    <div css={wrapperStyle}>
      This is a sample character page.
      <br />
      It belongs to {id}.

      <img src={img} />
    </div>
  )
}

export default withRouter(Character)
