import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { dataForRegistrationReducer } from "./reducers/dataForRegistration";

const rootReducer = combineReducers({
  dataForRegistrationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Используется для debug, удалить при окончании разработки
window.storage = store;

export default store;
