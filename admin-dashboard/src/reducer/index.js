import documentReducer from "./documentReducer";
import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk';

const finalReducer = combineReducers({

    documentReducer: documentReducer
})


const store = createStore(finalReducer)

export default store;