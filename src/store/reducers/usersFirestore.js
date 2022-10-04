import { SET_USERS_FIRESTORE, setUsersFireStore } from "../actions/usersFirestore";

const initialState = {
  users: [],
};

const changeUsers = (user) => (dispatch) => {
  dispatch(setUsersFireStore(user));
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_FIRESTORE:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export { changeUsers, usersReducer };
