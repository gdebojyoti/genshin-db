import { css, keyframes } from '@emotion/react'

const anim = keyframes`
  0% {
    filter: drop-shadow(0 0 2px red);
  }
  100% {
    filter: drop-shadow(0 0 20px red);
  }
`
export const iconStyle = css`
  width: 75px;
  height: 75px;
  object-fit: contain;
  /* animation: ${anim} 1s infinite alternate linear; */
`
