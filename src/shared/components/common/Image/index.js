import React from 'react'

import {
  baseImageStyle
} from './style'

const Image = (props) => {
  const {
    src = '',
    style,
    alt = ''
  } = props
  return (
    <img
      src={src}
      css={[baseImageStyle, style]}
      alt={alt}
    />
  )
}

export default Image
