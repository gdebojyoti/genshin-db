import React from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import CharactersList from 'shared/components/CharactersList'

import {
  pageStyle
} from './style'

const Welcome = () => {
  return (
    <div css={pageStyle}>
      <MetaTags
        title='All Characters | Genshin Impact DB'
        description='List of all playable characters in Genshin Impact. Filter them by weapon and vision.'
      />

      <CharactersList />
    </div>
  )
}

export default Welcome
