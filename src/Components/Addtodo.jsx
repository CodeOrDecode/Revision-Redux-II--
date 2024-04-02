import React from 'react'
import { useState } from 'react'

const Addtodo = ({addTodo}) => {

    const [title, setTitle] = useState("");


    function handleTitle(event){
        setTitle(event.target.value);
    }

    function handleClick(){
        addTodo(title);
        setTitle("");
    }

  return (
    <div>
        <input type="text" placeholder='title' value={title} onChange={handleTitle}/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Addtodo