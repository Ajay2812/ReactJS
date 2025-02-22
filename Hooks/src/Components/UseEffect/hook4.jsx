import axios from "axios";
import React from "react";
export default function Hook4() {
    const [post,setPost]=React.useState({})
    const [id,setId]=React.useState(1)
    const [idFromBtn,setIdFromBtn]=React.useState(1)
    React.useEffect(()=>
        {axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`).then(res=> {
            console.log(res)
            setPost(res.data)
        })
    },[idFromBtn])
    function handleClick(){
        setIdFromBtn(id)
    }
  return (
     <>
     <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
     <button onClick={handleClick}>Fetch Post</button>
     <li>{post.title}</li>
     </>
  )
}
