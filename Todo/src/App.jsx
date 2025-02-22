import React from "react"

export default function App(){
  const[val,setVal]=React.useState("")
  const [tasks,setTask]=React.useState([])
  const [checkItems,setCheckItems]=React.useState([])
  function handleChange(e){
    setVal(e.target.value)
  }

  function handleClick(){
    setTask([...tasks,val])
    setVal("")
  }
  function handleDel(index){
    setTask(
    tasks.map((task,i)=>(i===index?null:task
    ))
  )
  }

  const handleCheck = (index) => {
    setCheckItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return(
    <div className="container">
      <div className="todo-app">
        <h2>To-Do-List <img src="src/assets/icon.png" /></h2>
        <div className="row">
          <input type="text" value={val} onChange={handleChange} placeholder="Add Your Task" />
          <button onClick={handleClick}>ADD</button>
        </div>
        
        <ul id="list-container">

          {

           tasks.map((task,index)=>task!==null?(
              <li 
              onClick={()=>handleCheck(index)}
               className={checkItems.includes(index) ? "checked" : ""} 
               >
                {task}
               <span onClick={()=>handleDel(index)}>x</span>
               </li>
            ):null
          )}    
        </ul>
      </div>
    </div>
  )
}