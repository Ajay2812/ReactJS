import React from "react"
export default function Pad(props){

   
    return(
        <button 
        onClick={() => props.toggle(props.id)}
        style={{backgroundColor:props.color}}
        className={props.on ? "on":undefined}
        ></button>
    )
}