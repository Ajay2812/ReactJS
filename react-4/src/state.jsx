import React from "react"

export default function App(){
  //Here use state returns its parameter the we set and function
  //props are immutale where states can change dynamically
  
  let [isImportant,setIsImportant]=React.useState("YES")
  function handleClick(){
    return (
      setIsImportant("Definitely")
    )
  }
  return (
    <main>
      <h1>Is state important to know</h1>
      <button onClick={handleClick}>{isImportant}</button>
    </main>
  )
}


import React from "react"

export default function App(){
  let [count,setCount]=React.useState(0)
  function add(){
    return(
    //setCount(count+1)
    //setCount(function(prevCount){
   // return prevCount+1
  //})
    setCount(prevCount => prevCount+1)
    
    )
  }
  function minus(){
    return(
    setCount(count-1)
    )
  }

  return(
    <main>
      <h1>How many times will ajay say "state" in this section </h1>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <h2>{count}</h2>
    </main>
  )
}
import React from "react"
export default function App(){
  const [isGoingOut,setIsGoingOut]=React.useState(false)
  return (
    <main>
      <h1>Do i feel going out tonight</h1>
      <button onClick={() => {setIsGoingOut(!isGoingOut)}}>{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}