import React, { useEffect } from 'react'

import Image from 'shared/components/common/Image'

import visions from 'shared/data/visions.json'
import weapons from 'shared/data/weapons.json'
import {
  filtersStyle,
  visionIconStyle
} from './style'

const CharactersFilter = (props) => {
  const {
    inputValue,
    setInputValue,
    vision,
    setVision,
    weapon,
    setWeapon
  } = props

  useEffect(() => {
    setInputValue('')
  }, [])

  const onChange = e => {
    setInputValue(e.target.value)
  }
  const onSelectVision = (id) => {
    setVision(id === vision ? '' : id)
  }
  const onSelectWeapon = (id) => {
    setWeapon(id === weapon ? '' : id)
  }

  return (
    <div>
      <h3>Search by name</h3>
      <input placeholder={'Type any character\'s name'} type='text' value={inputValue} onChange={onChange} />

      <h3>Filter by vision ("type" / "class")</h3>
      <div css={filtersStyle}>
        {visions.map(({ key, name }) => (
          <div onClick={() => onSelectVision(key)} key={key}>
            {name}
            <Image
              alt={name}
              src={`https://genshindb-debojyotighosh.s3.ap-south-1.amazonaws.com/test/elements/${key}.png`}
              style={visionIconStyle}
            />
          </div>
        ))}
      </div>

      <h3>Filter by weapon</h3>
      <div css={filtersStyle}>
        {weapons.map(({ key, name }) => (
          <div onClick={() => onSelectWeapon(key)} key={key}>
            {name}
            <Image
              alt={name}
              src={`https://genshindb-debojyotighosh.s3.ap-south-1.amazonaws.com/test/weapon-types/${key}.png`}
              style={visionIconStyle}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharactersFilter
