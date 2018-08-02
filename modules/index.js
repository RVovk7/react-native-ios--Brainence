import thunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import {
  createLogger,
} from 'redux-logger';
import authReducer from './auth';


const rootReducer = combineReducers({
    authReducer
});

const logger = createLogger();
const middleware = applyMiddleware(thunk);

const Store = createStore(
  rootReducer,
  compose(
    middleware,
  ),
);

export default Store;