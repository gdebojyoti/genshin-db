import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ data }) => {
  const { name, rarity, vision_key: vision, weapon_type: weapon, description, key } = data
  return (
    <article key={key}>
      <h3>{name}</h3>
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
