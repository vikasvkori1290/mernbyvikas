import { useState,useCallback,useEffect,useRef } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setpassword]=useState("")

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) {
      str+="0123456789"
    }
    if (charAllowed) {
      str+="!@#$%^&*(){}[];"
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)

  },[length,numberAllowed,charAllowed,setpassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password,length])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center'>password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3  bg-white'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-amber-300 hover:text-black hover:duration-400 '>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input
      type="range"
      min={6}
      max={100}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      ></input>
      <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}>
        </input>
        <label htmlFor="numberInput">Numbers</label>
      </div>
      
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}></input>
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
