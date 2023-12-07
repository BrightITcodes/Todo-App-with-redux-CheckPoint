import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK } from "../types/type";

const initialState = {
  todos: [
    {
      id: Math.random(),
      task: "WEEK 1: Learn HTML",
      isDone: false,
    },
    {
      id: Math.random(),
      task: " WEEK 2: Learn CSS",
      isDone: true,
    },
    {
      id: Math.random(),
      task: "WEEK 3: Learn DOM",
      isDone: true,
    },
    {
      id: Math.random(),
      task: " WEEK 4: Learn JavaScript",
      isDone: true,
    },
    {
      id: Math.random(),
      task: " WEEK 5: Learn REACT HOOK",
      isDone: true,
    },
  ],
};

const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return { ...state, todos: [...state.todos, payload] };
    case "DELETE_TASK":
      return {
        ...state,
        todos: state.todos.filter((elt) => elt.id !== payload),
      };
    case "COMPLETE_TASK":
      return {
        ...state,
        todos: state.todos.map((elt) =>
          elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        todos: state.todos.map((elt) =>
          elt.id === payload.idTask ? { ...elt, task: payload.value } : elt
        ),
      };
    default:
      return state;
  }
};

export default TaskReducer;
