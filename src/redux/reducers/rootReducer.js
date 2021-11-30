import { combineReducers } from "redux";
import addressReducer from './signup/address.reducer';

import { userReducer } from "./login/userReducer";
import { searchPostsReducer } from "./posts/searchPostsReducer";
import {categoryReducer} from "./category/categoryReducer";
import { registerReducer } from "./signup/register.reducer";
import cartReducer from "./cart/cartReducer";
const rootReducer = combineReducers({
  userReducer,
  searchPostsReducer,
  categoryReducer, 
  addressReducer,
  registerReducer,
  cartReducer
});

export default rootReducer;
