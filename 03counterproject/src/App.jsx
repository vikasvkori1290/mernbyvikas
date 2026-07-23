import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter,setcounter] = useState(15)

  // let counter=15
  const addvalue=()=>{
    console.log("added value",counter)
    // counter=counter+1
    if(counter<20){
      setcounter(counter+1)
    }
    
  }
  const removevalue=()=>{
    if (counter>0){
      setcounter(counter-1)
    }
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addvalue}>add value</button>
     <br/>
     <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
