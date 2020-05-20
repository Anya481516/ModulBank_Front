import {put, call, takeEvery} from 'redux-saga/effects';
import {GET_ACCOUNTS_REQUEST, getAccountsSuccess, getAccountsError} from '../actions/accountsActions';
import {fetchAccounts} from '../api/accountsApi';

function* getAccounts() {
    try {
        const data = yield call(fetchAccounts);
        yield put(getAccountsSuccess(data));
    } catch (error) {
        yield put(getAccountsError(error.message));
    }
}

function* accountsSagas() {
    yield takeEvery(GET_ACCOUNTS_REQUEST, getAccounts);
}

export { accountsSagas }