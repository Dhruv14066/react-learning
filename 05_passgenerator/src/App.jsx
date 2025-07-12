import { use } from "react"
import { useCallback, useEffect, useRef } from "react"
import { useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberallow, setNumberallow] = useState(false)
  const [charallow, setcharallow] = useState(false)
  const [password, setPassword] = useState("")

  const PassGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallow) str += "0123456789"
    if(charallow) str += "!@#$%^&*_+=-"
    for(let i = 1; i <= length; i++){
      let idx = Math.floor(Math.random()*str.length + 1)
      let char = str.charAt(idx);
      pass += char
    }
    setPassword(pass)
  },[length, numberallow, charallow, setPassword])

  const passref = useRef(null);

  const copyToClipboard = useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{PassGenerator()},[length,numberallow,charallow,PassGenerator])
  return (
    <>
      <h1 className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-cyan-300 bg-gray-600">
        <h1 className="text-white text-center my-2 text-2xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-2 bg-gray-100 ">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='password'
        readOnly
        ref={passref}
        />
        <button className="outline-none bg-blue-700 px-3 py-2 shrink-0 text-black"
        onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 mb-4">
        <div className="flex items-center gap-x-1 text-orange-300">
          <input type="range" min={8} max={100} value={length}
            className="cursor-pointer"
            onChange={(e)=> {setLength(e.target.value)}}/>
          <label > length : {length} </label>
        </div>
        <div className="flex items-center gap-x-1 text-orange-300">
          <input type="checkbox" defaultChecked={numberallow} name="Number" id="NumberInput"
            onChange={()=> {
              setNumberallow((prev)=>!prev)
            }}
          />
          <label htmlFor="NumberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1 text-orange-300">
          <input type="checkbox" defaultChecked={charallow} name="char" id="CharInput"
            onChange={()=>{
              setcharallow((prev)=>!prev)
            }}
          />
          <label htmlFor="CharInput">Character</label>
        </div>
      </div>
      </h1>
      
    </>
  )
}

export default App
