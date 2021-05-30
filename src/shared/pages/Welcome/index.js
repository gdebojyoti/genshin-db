import React, { useEffect } from 'react'

import CharacterCard from '../../components/CharacterCard'
import characters from '../../data/charactersBasicData.json'

const Welcome = () => {
  useEffect(() => {
    const basicKeys = ['name', 'vision_key', 'weapon_type', 'rarity', 'description']
    const extraKeys = ['nation', 'constellation', 'skillTalents', 'passiveTalents', 'constellations']
    window.charBsc = []
    window.charAdv = []
    characters.forEach(character => {
      const basicData = {}
      basicKeys.forEach(key => {
        basicData[key] = character[key]
        basicData.key = character.name.toLowerCase()
      })

      const advancedData = {}
      extraKeys.forEach(key => {
        advancedData[key] = character[key]
        advancedData.key = character.name.toLowerCase()
      })

      window.charBsc.push(basicData)
      window.charAdv.push(advancedData)
    })
  }, [])
  return (
    <div>
      <header>
        <h1>
          Welcome to the Genshin Impact Database.
        </h1>
      </header>

      <h2>Character list</h2>
      {characters.map(data => {
        const { key } = data
        return <CharacterCard data={data} key={key} />
      })}

      <footer>
        <strong>P.S.</strong> We are not affiliated with <strong>MiHoYo</strong> in any way.
        We do not claim any copyrights to most of the contents of this site.
        <strong>Genshin Impact</strong> game and its associated trademarks belong to <strong>MiHoYo</strong>.
      </footer>
    </div>
  )
}

export default Welcome
