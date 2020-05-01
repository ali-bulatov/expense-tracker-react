// Reducer - specify the aplication state changes in response to certain actions
// to our store/context
export default (state, action) => {
    // type - id of action
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                // spread operator
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                // spread operator
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}