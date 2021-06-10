import { css } from '@emotion/react'

export const tableStyle = css`
  margin-top: 20px;
  border-collapse: collapse;
  td {
    padding: 5px 10px;
    border: solid 1px #ddd;
    @media (min-width: 480px) {
      padding-right: 20px;
    }
  }
  thead td {
    color: #333;
    font-weight: 700;
    background-color: #fff;
  }
  tbody tr:nth-of-type(2n) {
    background-color: #fff2;
  }
`

export const footnoteStyle = css`
  margin-top: 20px;
`
