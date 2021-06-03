import React from 'react'
import { Link } from 'react-router-dom'

import Image from 'shared/components/common/Image'

import {
  iconStyle,
  cardStyle,
  titleStyle,
  subtitleStyle
} from './style'

const CharacterCard = ({ data, index }) => {
  const {
    name,
    // rarity,
    vision_key: vision,
    // weapon_type: weapon,
    // description,
    key
  } = data

  return (
    <Link to={`/character/${key}`} css={cardStyle(vision, index)}>
      <Image
        style={iconStyle(index)}
        alt={`${name} icon from Genshin Impact`}
        src={`https://genshindb-debojyotighosh.s3.ap-south-1.amazonaws.com/test/characters/portraits/${key}.png`}
      />
      <h3 css={titleStyle}>{name}</h3>
      <div css={subtitleStyle}>{vision.toLowerCase()}</div>
      {/* <br />
      Class / Vision: {vision}
      <br />
      Weapon wielded: {weapon}
      <br />
      {rarity} star character
      <br />
      {description}
      <br />
      <Link to={`/character/${key}`}>More details about {name}</Link> */}
    </Link>
  )
}

export default CharacterCard
