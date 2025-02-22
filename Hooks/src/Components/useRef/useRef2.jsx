import React from 'react'
function USEREF(){
    const [timer,setTimer]=React.useState(0)
    const intervalRef=React.useRef()

    React.useEffect(()=>{
         intervalRef.current=setInterval(()=>{
            setTimer(prevTime=>prevTime+1)
        },1000)
        return()=>{
            clearInterval(intervalRef.current)
        }
    },[])
    return(
        <div>
            Hook - {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear</button>
        </div>            
    )
}

export default USEREF