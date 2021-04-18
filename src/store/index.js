import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {list} from './reducer/list';
import {topic} from './reducer/topic';

let reducers = combineReducers({list,topic},applyMiddleware(thunk));
let store = createStore(reducers);
export default store;