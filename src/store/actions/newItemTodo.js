export const SET_NEW_ITEM_TODO = "newItemTodo/SET_NEW_ITEM_TODO";
export const TOGGLE_MODAL_NEW_ITEM = "setNewProject/TOGGLE_MODAL_NEW_ITEM";
export const TOGGLE_MODAL_DETAILS = "setNewProject/TOGGLE_MODAL_DETAILS";

export const newItemTodo = (payload) => ({
  type: SET_NEW_ITEM_TODO,
  payload,
});

export const toggleModalNewItem = () => ({
  type: TOGGLE_MODAL_NEW_ITEM,
});

export const toggleModalDetails = () => ({
  type: TOGGLE_MODAL_DETAILS,
});
