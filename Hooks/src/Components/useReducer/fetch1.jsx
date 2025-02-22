
/*
export default function FetchOne() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [posts, setPosts] = React.useState({});

  async function GetData() {
    try{
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      //console.log(data)
      return data;
    }catch(error){
        setError('Something went wrong')
        setPosts({})
        setLoading(false)
    }
    
  }

  React.useEffect(() => {
    async function fetchData() {
      const postsData = await GetData();
      if (postsData) {
        setPosts(postsData);
        setError("");
      }
      setLoading(false);

    }
    fetchData()
  }, []);
  return <>
  {loading ? "Loading" : posts.title}
  {error?error:null}
  </>;
}
  */
import axios from "axios";
import React from "react";
export default function fetchOne(){
    const [loading,setLoading]=React.useState(true)
    const [error,setError]=React.useState('')
    const [post,setPost]=React.useState({})

    React.useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    },[])

    return(
        <>
        {loading?'Loading':post.title}
        {error?error:null}
        </>
    )
}