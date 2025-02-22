
import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";
export default function App() {

  const [dice,setDice]=React.useState(()=>generateAllNewDice())

  const gameWon=dice.every(die=> die.isHeld)&& dice.every(die=>die.value===dice[0].value)
 
  const buttonRef=React.useRef(null)

  React.useEffect(()=>{
    if(gameWon){
      buttonRef.current.focus()
    }

  },[gameWon])

  function generateAllNewDice(){
    return new Array(10).fill(0).map(()=>
    ({
        value:Math.ceil(Math.random()*6),
        id:nanoid(),
        isHeld:false
      }
     ) )
  }

  function handleRoll(){
    if(!gameWon){
      setDice(prevDie => {
        return(prevDie.map(die => {
          return die.isHeld ? die : {...die,value: Math.ceil(Math.random()*6)}
        }))
      })
    }
    else{
      setDice(generateAllNewDice())
    }
  }

  function handleHeld(id){
    setDice( prevDie => {
       return prevDie.map(die=>{
        return die.id===id ? 
        {...die,isHeld:!die.isHeld}:die
       })
    })
  }


  const diceElements=dice.map(dieObj=>
  <Die 
    key={dieObj.id} 
    value={dieObj.value}
    isHeld={dieObj.isHeld}  
    hold={()=>handleHeld(dieObj.id)}/>)
  return (
    <div className="container">
      {gameWon && <ReactConfetti/>}
      <h1>Tenzies</h1>
      <p>
        Roll until all the dice are the same.Click each die to freeze it as its
        current value between rolls.
      </p>
     
      <div className="btns">
        {diceElements}
      </div>
      <button ref={buttonRef} onClick={handleRoll} className="roll">{gameWon ? "New Game" : "Roll"}</button>
    </div>
  );
}
