import React from 'react'

import {
  tableStyle,
  footnoteStyle
} from './style'

const PointsTable = ({ data }) => {
  let totalPoints = 0
  return (
    <div>
      <h2>Adventure Rank EXP Table</h2>
      <table css={tableStyle}>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Points to next rank</td>
            <td>Total points</td>
            <td>Difference*</td>
          </tr>
        </thead>
        <tbody>
          {data.map((points, index) => {
            if (index > 0) {
              totalPoints += data[index - 1]
            }
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{points || '-'}</td>
                <td>{totalPoints || '-'}</td>
                <td>{index === 0 ? '-' : (points - data[index - 1])}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div css={footnoteStyle}>* <strong>Difference</strong> refers to amount by which Points requirement increased.</div>
    </div>
  )
}

export default PointsTable
