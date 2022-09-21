import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeStatus, deleteTask, editTask } from '../../JS/actions/Action'

const Task = ({el}) => {
  const [deskEdit, setDeskEdit] = useState(el.description)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()
  const handleClick = ()=> {
    setEdit(!edit)
    if(edit){
    dispatch(editTask(el.id,deskEdit))}
  }



  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}} >
      <div> {edit?<input type="text" Value={el.description} onChange={(e)=>setDeskEdit(e.target.value)} />:<h1>{el.description}</h1>}</div>
      <div>
      <button onClick={()=>dispatch(changeStatus(el.id))} >{el.isDone? "Done":"unDone"}</button>
      <button onClick={handleClick} >{edit?"Save":"Edit"}</button>
      <button onClick={()=>dispatch(deleteTask(el.id))} >Delete</button>
      </div>

    </div>
  )
}

export default Task