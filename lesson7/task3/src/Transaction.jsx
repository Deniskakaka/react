import React from 'react';
import moment from "moment";
import TransactionList from './TransactionList.jsx';

const formatDate = date => moment(date).format('D MMM');
const formatTime = date => moment(date).format('HH:mm');

const Transaction = (props) => {
    return <ul className="transactions">
            {props.transactions.map( i => (
                <TransactionList  
                    key={i.id} dateDay={formatDate(i.time)}
                    dateTime={formatTime(i.time)} 
                    from={i.from} to={i.to} 
                    rate={new Intl.NumberFormat('en-GB').format(i.rate)} 
                    amount={new Intl.NumberFormat('en-GB').format(i.amount)}   
                 />
            ))}
           </ul>
}

export default Transaction;