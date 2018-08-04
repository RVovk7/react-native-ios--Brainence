import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './auth';
import getMediaReducer from './getMedia';

const rootReducer = combineReducers({authReducer, getMediaReducer});
const middleware = applyMiddleware(thunk);

const Store = createStore(rootReducer,middleware);

export default Store;