import setSearchReducer from './setSearchReducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    search:setSearchReducer
})

export default reducers;