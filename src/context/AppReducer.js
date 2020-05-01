// Reducer - specify the aplication state changes in response to certain actions
// to our store/context
export default (state, action) => {
    // type - id of action
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                // spread operator
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                // spread operator
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        default:
            return state;
    }
}