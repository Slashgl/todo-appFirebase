import {
  TOGGLE_MODAL_NEW_ITEM,
  toggleModalNewItem,
  TOGGLE_MODAL_DETAILS,
  toggleModalDetails,
} from "../actions/newItemTodo";

const initialState = {
  isModalNewItem: false,
  isModalDetails: false,
};

const changeModalNewItem = () => (dispatch) => {
  dispatch(toggleModalNewItem());
};

const changeModalDetails = () => (dispatch) => {
  dispatch(toggleModalDetails());
};

const newItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_NEW_ITEM:
      return {
        ...state,
        isModalNewItem: !state.isModalNewItem,
      };
    case TOGGLE_MODAL_DETAILS:
      return {
        ...state,
        isModalDetails: !state.isModalDetails,
      };
    default:
      return state;
  }
};

export { newItemReducer, changeModalNewItem, changeModalDetails };
