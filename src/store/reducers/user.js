import { SET_USER, setUser, REMOVE_USER, removeUser } from "../actions/user";

const initialState = {
  user: {
    email: null,
    uid: null,
  },
};

const changeUser = (user) => (dispatch) => {
  dispatch(setUser(user));
};

const deleteUser = () => (dispatch) => {
  dispatch(removeUser());
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
    default:
      return state;
  }
};

export { userReducer, changeUser, deleteUser };
