import React from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
        return{
            loading:false,
            error:'',
            post:action.payload
        }
        case 'FETCH_ERROR':
            return{
                loading:false,
                post:{},
                error:'Something Went Wrong'
            }
        default:
            return state
    }

}
export default function FetchTwo(){

    const[state,dispatch]=React.useReducer(reducer , initialState)
    React.useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            dispatch({type:'FETCH_SUCCESS',payload:response.data})
        })
        .catch(error=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
    return(
        <>
        {state.loading ? 'Loading....': state.post.title}
        {state.error?error:null}
        </>
    )
}