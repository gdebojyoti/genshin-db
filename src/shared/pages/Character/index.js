import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import MetaTags from 'shared/components/common/MetaTags'
import Image from 'shared/components/common/Image'

import basicData from 'shared/data/charactersBasicData.json'
import secondaryData from 'shared/data/charactersAdvancedData.json'

import {
  portraitStyle
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

  const basicInfo = basicData.find(({ key }) => key === id.toLowerCase())
  const advancedInfo = secondaryData.find(({ key }) => key === id.toLowerCase())
  console.log('character', basicInfo, advancedInfo)

  // character id is mandatory
  if (!basicInfo || !advancedInfo) {
    return (
      <div>
        Character not found!
      </div>
    )
  }

  const { name, rarity, vision_key: vision, weapon_type: weapon, description, key } = basicInfo
  const { nation, constellation } = advancedInfo

  return (
    <div>
      <MetaTags
        title={`${name} character details | Genshin Impact DB`}
        description={`${name} details | Genshin Impact DB`}
      />

      <h1>{name}</h1>
      Class / Vision: {vision}
      <br />
      Weapon wielded: {weapon}
      <br />
      {rarity} star character
      <br />
      {description}
      <br />
      Nation: {nation}
      <br />
      Constellation: {constellation}

      <br />
      <Image style={portraitStyle} alt={`${name} portrait image from Genshin Impact`} src={`https://genshindb-debojyotighosh.s3.ap-south-1.amazonaws.com/test/characters/portraits/${key}.png`} />
      <br />

      <Link to='/'>Return to All Characters</Link>
    </div>
  )
}

export default withRouter(Character)
