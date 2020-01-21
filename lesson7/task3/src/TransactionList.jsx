import React from 'react';
import moment from "moment";

const formatDate = date => moment(date).format('D MMM');
const formatTime = date => moment(date).format('HH:mm');

const TransactionList = (props) => {
    return  <li className="transaction">
                <span className="transaction__date">{formatDate(props.dateDay)}</span>
                <span className="transaction__time">{formatTime(props.dateTime)}</span>
                <span className="transaction__assets">{props.from} → {props.to}</span>
                <span className="transaction__rate">{props.rate}</span>
                <span className="transaction__amount">{props.amount}</span>
            </li>
}

export default TransactionList;