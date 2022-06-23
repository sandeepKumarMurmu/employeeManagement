//importing from library
import { combineReducers } from "redux";

// importing reducers
import { TrackLogin } from "./trackLogin";

//exporting function
export const Reducers = combineReducers({
  TrackLogin,
});
