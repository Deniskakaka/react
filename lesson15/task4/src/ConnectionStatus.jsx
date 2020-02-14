import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
    const [conect, setConect] = useState({
        status: true,
        text: 'online'
    });

    useEffect(() => {
        const statusConectOffline = () => {
            setConect({status: false, text: 'offline'})
        };

        const statusConectOnline = () => {
            setConect({status: true, text: 'online'})
        }

        window.addEventListener('offline', statusConectOffline);
        window.addEventListener('online', statusConectOnline );

        return () => {
            window.removeEventListener('offline', statusConectOffline);
            window.removeEventListener('online', statusConectOnline);
        }
    },[])

    return (
        <div className={ conect.status ? 'status' : 'status status_offline'}>{conect.text}</div>
    );
};


export default ConnectionStatus;