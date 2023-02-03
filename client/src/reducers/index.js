import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import productReducer from "./productReducer";


const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));