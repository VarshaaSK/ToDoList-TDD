import React from 'react'

export default function TaskList({todo}) {
  return (
    <div>
        {
            todo.map((element, index) => {
                return(
                    <div data-testid = "taskid" key = {index}>
                        {element.task}
                    </div>
                )
            })
        }
    </div>
  )
}
