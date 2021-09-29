import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers

import { applyReducer } from "./reducers/applyReducers";
import { getItemReducer} from "./reducers/itemsReducers";
import {getItemDetailsReducer} from "./reducers/itemsReducers";

const reducer = combineReducers({
    apply:applyReducer,
    getItems:getItemReducer,
    getItemDetails:getItemDetailsReducer,
});

const middleware = [thunk];

const applyItemsInLocalStorage = localStorage.getItem('apply')
    ?JSON.parse(localStorage.getItem("apply"))
    :[];

const INITIAL_STATE = {
    apply:{
        applyItems:applyItemsInLocalStorage,

    },
};

const store = createStore (
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;