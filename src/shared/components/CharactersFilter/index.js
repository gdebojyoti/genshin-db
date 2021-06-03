import React, { useEffect } from 'react'

import Image from 'shared/components/common/Image'

import visions from 'shared/data/visions.json'
import weapons from 'shared/data/weapons.json'
import {
  filterContainerStyle,
  inputWrapperStyle,
  inputStyle,

  filterWrapperStyle,
  filtersStyle,
  filterItemStyle,
  activeVisionStyle,
  activeWeaponStyle,
  itemIconStyle
  // itemLabelStyle
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
    <div css={filterContainerStyle}>
      <label css={inputWrapperStyle}>
        <h3>Search by name</h3>
        <input
          placeholder={'Type any character\'s name'}
          type='text'
          value={inputValue}
          onChange={onChange}
          css={inputStyle}
        />
      </label>

      <div css={filterWrapperStyle}>
        <h3>Filter by vision ("type" / "class")</h3>
        <div css={filtersStyle}>
          {visions.map(({ key, name }) => (
            <div
              title={name}
              css={[filterItemStyle, vision === key && activeVisionStyle(key)]}
              onClick={() => onSelectVision(key)}
              key={key}
            >
              <Image
                alt={name}
                src={`https://genshindb-debojyotighosh.s3.ap-south-1.amazonaws.com/test/elements/${key}.png`}
                style={itemIconStyle}
              />
              {/* <span css={itemLabelStyle}>{name}</span> */}
            </div>
          ))}
        </div>
      </div>

      <div css={filterWrapperStyle}>
        <h3>Filter by weapon</h3>
        <div css={filtersStyle}>
          {weapons.map(({ key, name }) => (
            <div
              title={name}
              css={[filterItemStyle, weapon === key && activeWeaponStyle(key)]}
              onClick={() => onSelectWeapon(key)}
              key={key}
            >
              <Image
                alt={name}
                src={`https://genshindb-debojyotighosh.s3.ap-south-1.amazonaws.com/test/weapon-types/${key}.png`}
                style={itemIconStyle}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <h3>Filter by weapon</h3>
      <div css={filtersStyle}>
        {weapons.map(({ key, name }) => (
          <div onClick={() => onSelectWeapon(key)} key={key}>
            {name}
            <Image
              alt={name}
              src={`https://genshindb-debojyotighosh.s3.ap-south-1.amazonaws.com/test/weapon-types/${key}.png`}
              style={itemIconStyle}
            />
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default CharactersFilter
