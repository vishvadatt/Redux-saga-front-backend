import {combineReducers} from 'redux';

import {SignUpReducer,signInReducer} from './reducer';

const rootReducer = combineReducers({
    signup : SignUpReducer,
    signin : signInReducer
});

export default rootReducer; 