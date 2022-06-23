import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "../reducer/Reducer";

export const Store = createStore(Reducers, {}, applyMiddleware(thunk));
