import { SET_USER, setUser, REMOVE_USER, removeUser } from "../actions/user";
import { SET_NEW_ITEM_TODO, newItemTodo } from "../actions/newItemTodo";

const initialState = {
  user: {
    email: null,
    uid: null,
  },
  todos: [],
};

const changeUser = (user) => (dispatch) => {
  dispatch(setUser(user));
};

const deleteUser = () => (dispatch) => {
  dispatch(removeUser());
};

const addNewItemTodo = (data) => (dispatch) => {
  dispatch(newItemTodo(data));
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          email: action.payload.email,
          uid: action.payload.uid,
        },
      };
    case REMOVE_USER:
      return {
        ...state,
        user: {
          email: null,
          uid: null,
        },
      };
    case SET_NEW_ITEM_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            name: action.payload.todo,
            done: false,
            date: action.payload.date,
            priority: action.payload.priority,
            description: action.payload.description,
          },
        ],
      };
    default:
      return state;
  }
};

export { userReducer, changeUser, deleteUser, addNewItemTodo };
