import React from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import CharactersList from 'shared/components/CharactersList'

const Welcome = () => {
  return (
    <div>
      <MetaTags />

      <header>
        <h1>
          Welcome to the Genshin Impact Database.
        </h1>
      </header>

      <CharactersList />

      <footer>
        <strong>P.S.</strong> We are not affiliated with <strong>MiHoYo</strong> in any way.
        We do not claim any copyrights to most of the contents of this site.
        <strong>Genshin Impact</strong> game and its associated trademarks belong to <strong>MiHoYo</strong>.
      </footer>
    </div>
  )
}

export default Welcome
