import React from "react";

export default function Effect(){

    const[count,setCount]=React.useState(0)
    const[apidata,setData]=React.useState({})

    function handleClick(){
        setCount(prevCount => prevCount+1)
    }
    console.log("hiii")
    //Use Effect avoids going into infinite loop when fetching the data from apis
    React.useEffect( function(){
        fetch("https://api.openweathermap.org/data/2.5/weather")
            .then(res => res.json())
             .then(data => setData(data))

    },[0])

   

    return(
        <div>
            <h1>The count is {count}</h1>
            <button onClick={handleClick}>add</button>
        </div>
    )
}