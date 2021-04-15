import { createStore,combineReducers } from "redux";

import {list} from './reducer/list';

let reducers = combineReducers({list:list});
let store = createStore(reducers);
export default store;