export const GET_ACCOUNTS_REQUEST = 'GET_ACCOUNTS_REQUEST';
export const GET_ACCOUNTS_SUCCESS = 'GET_ACCOUNTS_SUCCESS';
export const GET_ACCOUNTS_ERROR = 'GET_ACCOUNTS_ERROR';
export const SET_DISPLAYED_ACCOUNT = 'SET_DISPLAYED_ACCOUNT'

export const getAccountsRequest = () => ({
    type: GET_ACCOUNTS_REQUEST
});

export const getAccountsSuccess = payload => ({
    type: GET_ACCOUNTS_SUCCESS,
    payload
});

export const getAccountsError = payload => ({
    type: GET_ACCOUNTS_ERROR,
    payload
});

export const setDisplayedAccount = payload => ({
    type: SET_DISPLAYED_ACCOUNT,
    payload
});