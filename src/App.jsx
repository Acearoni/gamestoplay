import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const  [gamesToPlay, setGamesToPlay] = useState([])

  return (
    <>
      <h1>Games To Play</h1>
      <Form gamesToPlay={gamesToPlay} setGamesToPlay={setGamesToPlay}/>
      <Display gamesToPlay={gamesToPlay} setGamesToPlay={setGamesToPlay}/>
    </>
  )
}

export default App
