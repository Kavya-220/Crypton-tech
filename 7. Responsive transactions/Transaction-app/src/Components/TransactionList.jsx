import React from 'react';

const TransactionList = ({ transactions }) => {
    return (
        <div className="transaction-list">
            {transactions.map(transaction => (
                <div key={transaction.id} className="transaction">
                    <div className="transaction-left">
                        <img src={transaction.image} alt="" width={100} height={100} />
                        <div className="transc-details">
                            <span className='title'>{transaction.name}</span>
                            <div className="timing-details">
                                <span className='timing'>{transaction.details}</span>
                                <span className="dot"> • </span>
                                <span className='timing'>{transaction.timing}</span>
                            </div>
                        </div>
                    </div>
                    <div className="transaction-right">
                        <span className={`change ${transaction.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                            {transaction.amount}
                        </span>
                        <span className='statement'>{transaction.statement}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
