import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter,setcounter] = useState(1); //const [element, method] = default value u want to give is inside usestate
 // let counter = 1;

  const incval = () => {
    console.log("clicked!");
    if(counter < 20) setcounter(counter + 1);
  }

  const decval = () => {
    console.log("clicked!");
    if(counter > 0) setcounter(counter - 1);

  }
  return (
    <>
      <h1>Counter</h1>
      <h2> value : {counter}</h2>
      <button 
      onClick={incval}>
        inc value
      </button>

      <button onClick={decval}>dec value</button>
    </>
  )
}

export default App
