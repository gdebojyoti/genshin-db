import React, { useEffect } from 'react'

const CharactersFilter = ({ inputValue, setInputValue }) => {
  // const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    setInputValue('')
  }, [])
  const onChange = e => {
    setInputValue(e.target.value)
  }
  console.log('inputValue', inputValue, '', typeof inputValue)
  return (
    <div>
      <input placeholder={'Type any character\'s name'} type='text' value={inputValue} onChange={onChange} />
    </div>
  )
}

export default CharactersFilter
