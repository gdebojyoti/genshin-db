import React, { useState } from 'react'

import CharacterCard from 'shared/components/CharacterCard'
import CharactersFilter from 'shared/components/CharactersFilter'

import characters from 'shared/data/charactersBasicData.json'
import { inlineResetStyle } from './style'

const CharactersList = () => {
  const [inputValue, setInputValue] = useState('')

  const resetFilters = () => {
    setInputValue('')
  }

  const string = inputValue.toLowerCase().trim()

  const results = characters
    .filter(({ name }) => {
      if (!inputValue) {
        return true
      }
      return name.toLowerCase().indexOf(string) !== -1
    })

  return (
    <div>
      <h2>Character list</h2>

      <CharactersFilter inputValue={inputValue} setInputValue={setInputValue} />

      {!results.length && (
        <div>
          No character matches the filters.
          Please try some other filters or{' '}
          <span css={inlineResetStyle} onClick={resetFilters}>reset 'em all</span>.
        </div>
      )}

      {!!results.length && results.map(data => {
        const { key } = data
        return <CharacterCard data={data} key={key} />
      })}
    </div>
  )
}

export default CharactersList
