import React from "react"
function Memo(){
    const [c1,setC1]=React.useState(0)
    const [c2,setC2]=React.useState(0)

    const incre1=()=>{
        setC1(c1+1)
    }

    const incre2=()=>{
        setC2(c2+1)
    }
   const isEven=React.useMemo(()=>{
    let i=0 
    while (i<200000000) i++
    return c1%2===0
   },[c1])
    return (
        <>
        <button onClick={incre1}>CountOne-{c1} <span>{isEven?'even':'odd'}</span></button><br></br>
        <button onClick={incre2}>CountTwo-{c2}</button>

        </>
    )

}
export default Memo