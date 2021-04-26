import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {list} from './reducer/list';

let reducers = combineReducers({list},applyMiddleware(thunk));
let store = createStore(reducers);
export default store;