import * as actions from '../actions/accountsActions';

const initialState = {
    accountsList: [],
    errorMessage: null,
    loading: false,
    displayedAccount: {},
};

const accounts = (state = initialState, action) => {
    switch(action.type){
        case actions.GET_ACCOUNTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actions.GET_ACCOUNTS_SUCCESS:
            return {
                ...state,
                loading: false,
                accountsList: action.payload,
                displayedAccount: action.payload[0],
            }
        case actions.GET_ACCOUNTS_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            }
        case actions.SET_DISPLAYED_ACCOUNT:
            return {
                ...state,
                displayedAccount: state.accountList.find(i => i.id === action.payload.accountId),
            }
        default:
            return state;
    }
};

export default accounts;