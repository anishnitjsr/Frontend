import React from 'react';

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}INR{Math.abs(transaction.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};

export default Transaction;
