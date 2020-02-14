import React, { useState, useEffect } from 'react';
import moment from 'moment'


const Clock = (props) => {
    const [date, setDate] = useState(0);

    useEffect(() => {
       const interval = setInterval(() => {
           setDate(new Date());
       },1000);

       return () => {
        clearInterval(interval);
       }
    })
    const time = moment(date).utcOffset(props.offset).format('h:mm:ss A')
    return (
        <div className="clock">
            <span className="clock__location">{props.location}</span>
            <span className="clock__time">{time}</span>
        </div>
    )
};

export default Clock;