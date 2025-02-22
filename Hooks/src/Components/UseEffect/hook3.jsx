import React from 'react'
import HookMouse from './hook2'
export default function HookMouse2(){
    const [display,setDisplay]=React.useState(true)
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse/>}
        </div>
    )
}