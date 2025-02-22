import React from "react"
export default function App(){
  const [Pa,setPa]=React.useState("")
  const[roi,setRoi]=React.useState("")
  const[tp,setTp]=React.useState("")
  const [res,setRes]=React.useState("")
  function handleClick(){
    setRes(
      (Pa/100)*tp*roi
    )
  }
  function reset(){
    setPa("");
    setRes("");
    setRoi("");
    setTp("");
    
  }
  return(
  <div className="container">
    <h1>Simple Calculator</h1>
    <p className="p1">Calculate your simple interest easily</p>
    <div className="result">
      <h1>{"$" + res}</h1>
      <p>Total Simple Interest</p>
    </div>
    <form>
      <input type="number" placeholder="$ Principal amount" value={Pa}  onChange={(e)=>setPa(e.target.value)}/>
      <input type="number" placeholder="Rate of interest (p.a)%" value={roi} onChange={(e)=>setRoi(e.target.value)}/> 
      <input type="number" placeholder="Time period (Yr)" value={tp} onChange={(e)=>setTp(e.target.value)}/>
    </form>
    <div className="btns">
      <button onClick={handleClick} className="cal">CALCULATE</button>
      <button onClick={reset}>RESET</button>
    </div>
  </div>
  )
}