import { combineReducers } from "redux";
import memoryReducer from "./memory.reducer";
import userReducer from "./user.reducer";
export default combineReducers({
  user: userReducer,
  memory: memoryReducer
});
