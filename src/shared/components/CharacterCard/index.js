import React from 'react'
import { Link } from 'react-router-dom'

import Image from 'shared/components/common/Image'

import { iconStyle } from './style'

const CharacterCard = ({ data }) => {
  const { name, rarity, vision_key: vision, weapon_type: weapon, description, key } = data
  return (
    <article>
      <h3>{name}</h3>
      <Image style={iconStyle} alt={`${name} icon from Genshin Impact`} src={`https://genshindb-debojyotighosh.s3.ap-south-1.amazonaws.com/test/characters/${key}/icon.png`} />
      <br />
      Class / Vision: {vision}
      <br />
      Weapon wielded: {weapon}
      <br />
      {rarity} star character
      <br />
      {description}
      <br />
      <Link to={`/character/${key}`}>More details about {name}</Link>
    </article>
  )
}

export default CharacterCard
