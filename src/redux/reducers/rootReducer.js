import { combineReducers } from "redux";

import { userReducer } from "./login/userReducer";
import { searchPostsReducer } from "./posts/searchPostsReducer";
const rootReducer = combineReducers({
  userReducer,
  searchPostsReducer
});

export default rootReducer;
