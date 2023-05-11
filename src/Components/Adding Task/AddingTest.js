import React, { useState } from 'react'

export default function ({todo,setToDo}) {

    const [todos,setToDos] = useState("");
    const [buttonEnabled, setButtonEnable] = useState(true);

    const clearTheFiled = () => {
        setToDo([...todo,{task : todos}]);
        setToDos("");
    }
  return (
    <div>
        <input placeholder='Enter your Task!' id = "taskInput" value={todos} 
        onChange={(e) => {
          setToDos(e.target.value) 
          if(e.target.value.length > 1){
            setButtonEnable(false);
          }
          else{
            setButtonEnable(true);
          }
        }
        }></input>

        <button disabled={buttonEnabled} onClick={() => clearTheFiled()}>Add Task</button>
    </div>
  )
}
