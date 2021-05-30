// window.fetch('https://api.genshin.dev/characters')
//   .then(data => data.json())
//   .then(data => {
//     console.log('all character names', data)
//     const promises = []
//     data.forEach(character => {
//       promises.push(window.fetch(`https://api.genshin.dev/characters/${character}`))
//     })
//     Promise.all(promises)
//     // .then(data => data.json())
//       .then(data => {
//         window.allCharacterData = []
//         data.forEach(response => response.json()
//           .then(data => {
//             window.allCharacterData.push(data)
//           }))
//         console.log('character data', window.allCharacterData)
//       })
//   })
