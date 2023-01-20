import { createStore, applyMiddleware, compose } from "redux";
import  ThunkMiddleware  from "redux-thunk";
import  reducer  from "./reducer";

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    reducer,
    composeEnhance(applyMiddleware(ThunkMiddleware))
)

export default store;