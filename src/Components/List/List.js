import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'

const List = () => {
  const tasks = useSelector((state)=>state.tasks)
  return (
    <div>
      {tasks.map(el=> <Task el={el} />)}
    </div>
  )
}

export default List