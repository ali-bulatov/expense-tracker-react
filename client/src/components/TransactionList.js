import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    // HTTP request from component
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        getTransactions();
    }, []);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                { transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}       
            </ul>
        </>
    )
}
