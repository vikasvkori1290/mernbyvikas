import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-2xl rounded-xl'>tailwind test</h1>
      <Card username="vikas v" btntext="visit me"/>
      <Card username="hellooo" btntext="heheheheh"/>

    </>
  )
}

export default App
