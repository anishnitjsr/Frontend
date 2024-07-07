import React from 'react';
import Transaction from './Transction';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>History</h3>
      <ul>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
