import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../JS/actions/Action'
import { v4 as uuidv4 } from 'uuid';

const Add = () => {

  const dispatch = useDispatch()
  const [newDesc, setNewDesc] = useState("")
  


  return (
    <div>
      <input  onChange={(e)=>setNewDesc(e.target.value)} type="text" />
      <button onClick={()=>dispatch(add({description:newDesc,isDone:false,id:uuidv4()}))} >+Add+</button>
    </div>
  )
}

export default Add