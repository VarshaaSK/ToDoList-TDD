import React, { useState } from 'react'
import AddingTest from '../Adding Task/AddingTest'
import TaskList from '../TaskList/TaskList';
import { Link } from 'react-router-dom';

export default function Todo() {

  const [todo,setToDo] = useState([]);

  return (
    <div>
      <AddingTest todo = {todo} setToDo={setToDo}/>
      <TaskList todo = {todo}/>
      <Link to = "/user">Go To Users</Link>
      </div>
    
  )
}
