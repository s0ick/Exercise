import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mapReducer from './mapReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  MapPage: mapReducer,
  form: formReducer
});

const store = createStore(reducers, (applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;