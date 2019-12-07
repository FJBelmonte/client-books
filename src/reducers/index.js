import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import bookReducer from "./bookReducer";

export default combineReducers({
  form: formReducer,
  books: bookReducer
});
