import React from "react"

export default function HookMouse(){
    const [x,setX]=React.useState(0)
    const [y,setY]=React.useState(0)

    const logMousePosition=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    React.useEffect(()=>{
        console.log('useEffect')
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log("unmounting")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return(
        <div>
            Hook X -{x} Y-{y}
        </div>
    )
}