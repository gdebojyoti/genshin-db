import { css } from '@emotion/react'

import { swatches } from 'shared/styles/colors'

export const filterContainerStyle = css`
`

export const inputWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const inputStyle = css`
  margin-top: 15px;
  padding: 15px;
  border: solid 1px #7f7f7f;
  background-color: #333;
  border-radius: 5px;
`

export const filterWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const filtersStyle = css`
  display: flex;
  margin-top: 15px;
`

export const filterItemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 7px;
  padding: 7px;
  border: solid 1px #333;
  cursor: pointer;
  border-radius: 10px;
  &:first-of-type {
    margin-left: 0;
  }
`

export const activeVisionStyle = key => css`
  border-color: ${swatches[key]};
  box-shadow: inset 0 0 5px ${swatches[key]};
  background-color: ${swatches[key]}33;
`

export const activeWeaponStyle = key => css`
  border-color: #7f7f7f;
  box-shadow: inset 0 0 5px #7f7f7f;
  background-color: $7f7f7f33;
`

export const itemIconStyle = css`
  width: 30px;
  height: 30px;
`

export const itemLabelStyle = css`
  margin-top: 7px;
  font-size: 12px;
  text-align: center;
`
