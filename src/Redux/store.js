import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/authReducer";
import thunk from "redux-thunk";
import { productReducer } from "./Products/productReducer";
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
let rootReducer=combineReducers({authReducer,productReducer})
export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))