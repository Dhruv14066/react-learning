import { useState } from 'react'
import "tailwindcss";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';
function App() {
  let somearr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-3'>Tailwind Test</h1>
      <Card username = "Alice" val = "0.01"/>
      <Card username = "Bob" val = "0.02"/>
    </>
  )
}

export default App
