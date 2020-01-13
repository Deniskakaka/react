import React from 'react';
import moment from "moment";
import './index.scss';

const formatDate = date => moment(date).format("DD MMM YYYY");

function Greeting(props) {
  return (
    <div className="greeting">
        <div className="greeting__name">
            <span>{props.user.firstName} {props.user.lastName}</span>
        </div>
        <div className="greeting__birth">
            <span>{formatDate(props.date)} in {props.user.birthPlace}</span>
        </div>
    </div>
  );
}

export default Greeting;