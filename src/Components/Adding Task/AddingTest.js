import React from 'react'

export default function ({todo,setToDo}) {

    const clearTheFiled = () => {
        setToDo();
        const inputField = document.getElementById("taskInput");
        inputField.value = "";
    }
  return (
    <div>
        <input placeholder='Enter your Task!' id = "taskInput"></input>
        <button onClick={() => clearTheFiled()}>Add Task</button>
    </div>
  )
}
