import { ADD_TASK, CHANGE_STATUS, DELETE_TASK, EDIT_TASK } from "../constants/Constants"

export const add = (newTask)=> {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const deleteTask = (id)=> {
    return {
        type: DELETE_TASK,
        payload: id
    }
}


export const changeStatus = (id)=> {
    return {
        type: CHANGE_STATUS,
        payload: id
    }
}


export const editTask = (id,desc)=> {
    return {
        type: EDIT_TASK,
        payload: {id,desc}
    }
}