import store from "./Store";
import { userReducer, changeUser, deleteUser } from "./reducers/user";
import { changeUsers } from "./reducers/usersFirestore";
import { getUser, getUsers } from "./selectors/usersFirestore";

export { store, userReducer, getUser, changeUser, changeUsers, getUsers, deleteUser };
