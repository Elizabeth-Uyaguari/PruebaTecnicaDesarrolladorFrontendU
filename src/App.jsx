import { useState } from 'react'
import './App.css'
import Routs from './router'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routs/> 
    </>
  )
}

export default App
