import { createStore } from 'redux'
import { combineReducers } from "redux";
import photosReducer from './photos';

const rootReducer = combineReducers({
    photos: photosReducer,
});

const store = createStore(rootReducer);

export default store;