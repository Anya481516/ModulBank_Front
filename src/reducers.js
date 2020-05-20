import { combineReducers } from 'redux';
import accounts from './modules/accounts/reducers/accountsReducer';

const rootReducer = combineReducers({
    accounts,
})

export default rootReducer