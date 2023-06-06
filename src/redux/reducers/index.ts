import { combineReducers } from 'redux';
import header from './header'
import Home from './Home';

const reducers = combineReducers({ header, Home });

export default reducers;