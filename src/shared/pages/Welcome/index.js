import React from 'react'

import CharacterCard from 'shared/components/CharacterCard'
import characters from 'shared/data/charactersBasicData.json'

const Welcome = () => {
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
