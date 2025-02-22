import React from 'react'
const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}
export default function Reducer(){
    const[count,dispatch]=React.useReducer(reducer,initialState)

    return(
        <>
        <div>Count-{count}</div>
        <button onClick={()=> dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
        </>
    )
}