import { combineReducers } from "redux";
import SearchReducers from "./reducers/SearchReducers";

const rootReducer = combineReducers({
  SearchReducers,
});
export default rootReducer;
