import React from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import PointsTable from 'shared/components/AdventureRank/PointsTable'

import data from 'shared/data/ar.json'

import {
  pageStyle
} from './style'

const AdventureRank = () => {
  return (
    <div css={pageStyle}>
      <MetaTags
        title='Adventure Rank Guide | Genshin Impact DB'
        description='All about Adventure Rank System in Genshin Impact video game. Adventure EXP Table.'
      />

      <PointsTable data={data} />
    </div>
  )
}

export default AdventureRank
