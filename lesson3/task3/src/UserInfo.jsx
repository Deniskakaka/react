import React from 'react';
import UserAvatar from './UserAvatar.jsx';

const UserInfo= props => {
    return (
        <div className="user-info">
          <UserAvatar 
            avatartUrl={props.user.avatartUrl}
            name={props.user.name}
          />
          <div className="user-info__name">
            {props.user.name}
          </div>
        </div>
    ); 
};

export default UserInfo;