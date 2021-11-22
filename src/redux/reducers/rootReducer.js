import { combineReducers } from "redux";
import addressReducer from './signup/address.reducer';

import { userReducer } from "./login/userReducer";
import { searchPostsReducer } from "./posts/searchPostsReducer";
import {categoryReducer} from "./category/categoryReducer";
import { registerReducer } from "./signup/register.reducer"
const rootReducer = combineReducers({
  userReducer,
  searchPostsReducer,
  categoryReducer, 
  addressReducer,
  registerReducer
});

export default rootReducer;
