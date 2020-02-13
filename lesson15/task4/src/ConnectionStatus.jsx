import React, { useEffect, useState  } from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';

const ConnectionStatus = () => {
    const [Conect, setConect] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => setConect(true));
        window.addEventListener('offline', () => setConect(false));

        return () => {
            window.removeEventListener('online', () => setConect(true));
            window.removeEventListener('offline', () => setConect(false));
        }
    })

    return (
        <div className={Conect ? 'status' : 'red'}>
            {Conect ? <Online/>: <Offline/>}
        </div>
    );
};

export default ConnectionStatus;