import React from 'react';

const UserAvatar = props => {
    return (
        <img
            className="avatar"
            src={props.avatartUrl}
            alt={props.name}
        />
        
    );
};

export default UserAvatar;