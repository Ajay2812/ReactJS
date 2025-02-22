import React from "react"

export default function Hook1(){
    const [c,setC]=React.useState(0)
    const [name,setName]=React.useState("")
    React.useEffect(()=>{
        document.title=`You Clicked ${c} times`
        console.log("abc")
    })
    return(
        <>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setC(c+1)}>Click {c} times</button>
        </>
    )
}