import React from "react"
export default function HookFour(){
    const [items,setItems]=React.useState([])
    function handleClick(){
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return(
        <>
        <button onClick={handleClick}>Add Number</button>
        <ul>
        {items.map(item=>(
            <li key={item.id}>{item.value}</li>
        ))}
        </ul>
        </>
    )

}