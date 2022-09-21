import { ADD_TASK, CHANGE_STATUS, DELETE_TASK, EDIT_TASK } from "../constants/Constants";
const intialState = {
  tasks: [
    { description: "task 1", id: 1, isDone: false },
    { description: "task 2", id: 2, isDone: false },
  ],
};
export const taskReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };

    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };

    case CHANGE_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TASK:
        return {
            ...state,
            tasks: state.tasks.map((el) =>
              el.id === payload.id ? { ...el, description: payload.desc } : el
            ),
          };
    default:
      return state;
      break;
  }
};
