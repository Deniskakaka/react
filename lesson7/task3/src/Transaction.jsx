import React from 'react';
import moment from "moment";
import TransactionList from './TransactionList.jsx';

const formatDate = date => moment(date).format('DMMM');
const formatTime = date => moment(date).format('h:mm');

const Transaction = (props) => {
    return <ul className="transactions">
            {props.transactions.map( i => (
                <TransactionList  key={i.id} dateDay={formatDate(i.time)} dateTime={formatTime(i.time)} from={i.from} to={i.to} rate={i.rate} amount={i.amount}/>
            ))}
           </ul>
}

export default Transaction;