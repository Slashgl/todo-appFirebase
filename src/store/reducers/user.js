import { SET_USER, setUser } from "../actions/user";

const initialState = {
  user: {
    email: null,
    uid: null,
  },
};

const changeUser = (user) => (dispatch) => {
  dispatch(setUser(user));
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
    default:
      return state;
  }
};

export { userReducer, changeUser };
