import React from 'react';

const TransactionList = (props) => {
    return  <li className="transaction">
                <span className="transaction__date">{props.dateDay}</span>
                <span className="transaction__time">{props.dateTime}</span>
                <span className="transaction__assets">{props.from} → {props.to}</span>
                <span className="transaction__rate">{props.rate}</span>
                <span className="transaction__amount">{props.amount}</span>
            </li>
}

export default TransactionList;