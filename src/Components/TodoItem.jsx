import React from 'react'

const TodoItem = ({id,title,status,handleEditTodo}) => {
  return (
    <div style={{border:"1px solid black",margin:"12px 12px",padding:"14px"}}>
        <h2>{title}</h2>
        <button onClick={()=>{handleEditTodo(id,status)}}>{status ? "Completed":"Pending"}</button>
    </div>
  )
}

export default TodoItem