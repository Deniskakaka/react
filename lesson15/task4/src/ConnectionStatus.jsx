import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
    const [conect, setConect] = useState({
        status: true,
        text: 'online'
    });

    useEffect(() => {
        window.addEventListener('offline', () => setConect({status: false, text: 'offline'}));
        window.addEventListener('online', () => setConect({status: true, text: 'online'}));

        return () => {
            window.removeEventListener('offline', () => setConect({status: false, text: 'offline'}));
            window.removeEventListener('online', () => setConect({status: true, text: 'online'}));
        }
    },[])

    return (
        <div className={ conect.status ? 'status' : 'status status_offline'}>{conect.text}</div>
    );
};


export default ConnectionStatus;