import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true
}
 
// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions making calls to reducer
    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');

            // get the entire object
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            // get the entire object
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }

        
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'ContentType': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    // provides state to the component wrapped around it
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}