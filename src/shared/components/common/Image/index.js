import React from 'react'

import {
  baseImageStyle
} from './style'

const Image = (props) => {
  const {
    src = '',
    style,
    alt = '',
    lazy = true
  } = props
  return (
    <img
      src={src}
      css={[baseImageStyle, style]}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
    />
  )
}

export default Image
