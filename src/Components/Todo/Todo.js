import React, { useState } from 'react'
import AddingTest from '../Adding Task/AddingTest'

export default function Todo() {

  const [todo,setToDo] = useState([]);

  return (
    <div><AddingTest todo = {todo} setToDo={setToDo}/></div>
  )
}
