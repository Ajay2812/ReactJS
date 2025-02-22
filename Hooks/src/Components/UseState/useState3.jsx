import React from "react"
export default function HookThree(){
    const [name,setName]=React.useState({
        firstName:'',
        lastName:''
    })
    function handleFname(e){
       setName({
        ...name,
        firstName:e.target.value
       })
    }
    function handleLname(e){
        setName({
            ...name,
            lastName:e.target.value
           })
    }
    return(
        <form>
            <input type="text" value={name.firstName} onChange={handleFname}/>

            <input type="text" value={name.lastName} onChange={handleLname}/>
            <h2>First Name:{name.firstName}</h2>
            <h2>Last Name:{name.lastName}</h2>

        </form>
    )
}