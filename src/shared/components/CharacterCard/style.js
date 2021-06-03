import { css, keyframes } from '@emotion/react'

import { swatches } from 'shared/styles/colors'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
export const cardStyle = (vision, index) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 120px;
  height: 150px;
  margin: 15px;
  padding: 25px 15px;
  background-color: ${swatches[vision]};
  opacity: 0;
  /* border-radius: 55px 15px 15px; */
  border-radius: 20px;
  text-decoration: none;
  animation: ${fadeIn} .3s ${index * 0.05}s forwards;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    width: 80px;
    height: 100px;
    box-shadow: 0 5px 20px 0 ${swatches[vision]};
  }
`

export const titleStyle = css`
  position: relative;
  font-size: 16px;
  /* text-transform: uppercase; */
  font-weight: 700;
  text-shadow: 0 0 2px rgba(0,0,0,.51);
`

export const subtitleStyle = css`
  position: relative;
  text-transform: capitalize;
  opacity: .85;
  text-shadow: 0 0 2px rgba(0,0,0,.51);
`

export const iconStyle = index => css`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 90px;
  height: 160px;
  opacity: 0;
  animation: ${fadeIn} .75s ${index * 0.06 + 0.5}s forwards;
`
