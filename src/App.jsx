import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Main texto="bueno chau"></Main>
    <Main texto="hola"></Main>
    </>
  )
}

export default App
