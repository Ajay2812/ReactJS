/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import React from "react"
import padsData from "./pads"
import Pad from "./Pad"
export default function App(){

  const [pads,setPads]=React.useState(padsData)
  function toggle(id){
  setPads(prevPads => prevPads.map(item =>{
    return item.id===id ? {...item,on:!item.on} : item
  }))
  }

  const buttonElements=pads.map(pad =>(
    <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
  ))

  return (
    <main>
    <div className="pad-container">
    {buttonElements}
    </div>
    </main>
  )
}
