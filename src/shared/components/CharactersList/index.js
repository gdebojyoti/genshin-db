import React, { useState } from 'react'

import CharacterCard from 'shared/components/CharacterCard'
import CharactersFilter from 'shared/components/CharactersFilter'

import characters from 'shared/data/charactersBasicData.json'
import { inlineResetStyle } from './style'

const CharactersList = () => {
  const [inputValue, setInputValue] = useState('')
  const [vision, setVision] = useState()
  const [weapon, setWeapon] = useState()

  const resetFilters = () => {
    setInputValue('')
    setVision('')
    setWeapon('')
  }

  const string = inputValue.toLowerCase().trim()

  const results = characters
    .filter(({ name }) => {
      if (!inputValue) {
        return true
      }
      return name.toLowerCase().indexOf(string) !== -1
    })
    .filter(({ vision_key: visionKey, weapon_type: weaponType }) => {
      if (vision && visionKey.toLowerCase() !== vision) {
        return false
      }
      if (weapon && weaponType.toLowerCase() !== weapon) {
        return false
      }
      return true
    })

  return (
    <div>
      <h2>Character list</h2>

      <CharactersFilter
        inputValue={inputValue}
        setInputValue={setInputValue}
        vision={vision}
        setVision={setVision}
        weapon={weapon}
        setWeapon={setWeapon}
      />

      {!results.length && (
        <div>
          No character matches the filters.
          Please try some other filters or{' '}
          <span css={inlineResetStyle} onClick={resetFilters}>reset 'em all</span>.
        </div>
      )}

      {!!results.length && (
        <h3>Showing {results.length} matching character{results.length > 1 ? 's' : ''}</h3>
      )}

      {!!results.length && results.map(data => {
        const { key } = data
        return <CharacterCard data={data} key={key} />
      })}
    </div>
  )
}

export default CharactersList
