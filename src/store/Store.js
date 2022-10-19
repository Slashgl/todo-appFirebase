import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { userReducer } from "./reducers/user";
import { usersReducer } from "./reducers/usersFirestore";
import { projectReducer } from "./reducers/newProject";

const rootReducer = combineReducers({
  userReducer,
  usersReducer,
  projectReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Используется для debug, удалить при окончании разработки
window.storage = store;

export default store;
