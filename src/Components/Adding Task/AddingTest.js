import React, { useState } from 'react'

export default function ({todo,setToDo}) {

    const[todos,setToDos] = useState("");

    const clearTheFiled = () => {
        setToDo([...todo,{task : todos}]);
        setToDos("");
    }
  return (
    <div>
        <input placeholder='Enter your Task!' id = "taskInput" value={todos} onChange={(e) => setToDos(e.target.value)}></input>
        <button onClick={() => clearTheFiled()}>Add Task</button>
    </div>
  )
}
