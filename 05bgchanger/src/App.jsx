import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color,setcolor]=useState("olive")
  const redcolor=()=>{
    setcolor("red")
  }
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 pb-3'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button className='outline-none px-4 py-1 rounded-full bg-red-500' onClick={redcolor}>red</button>
          <button className='outline-none px-4 py-1 rounded-full bg-blue-500'onClick={()=>setcolor("blue")}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full bg-yellow-500' onClick={()=>setcolor("yellow")}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full bg-black text-white'onClick={()=>setcolor("black")}>black</button>
          <button className='outline-none px-4 py-1 rounded-full bg-orange-500'onClick={()=>setcolor("orange")}>orange</button>
          <button className='outline-none px-4 py-1 rounded-full bg-violet-500'onClick={()=>setcolor("violet")}>voilet</button>
          <button className='outline-none px-4 py-1 rounded-full bg-green-500'onClick={()=>setcolor("green")}>green</button>
          <button className='outline-none px-4 py-1 rounded-full bg-pink-500'onClick={()=>setcolor("pink")}>pink</button>
          <button className='outline-none px-4 py-1 rounded-full bg-purple-500'onClick={()=>setcolor("purple")}>purple</button>

            
          
        </div>

      </div>
    </div>
  )
}

export default App
