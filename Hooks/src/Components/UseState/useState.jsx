import React from 'react'
export default function UseState(){
    const[count,setCount]=React.useState(0)
    function handleClick(){
        setCount(count+1)
    }
    return(
        <button onClick={handleClick}>Count {count}</button>
    )
}