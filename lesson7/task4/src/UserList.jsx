import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

const UserList = (props) => {
    return (<div>
                <Pagination  totalItems={props.length} itemsPerPage={props.length}/>
                <ul className="users">
                    {props.users.map(user => 
                        <User  key={user.id} name={user.name} age={user.age}/>
                    )}
                </ul>
           </div>)
};

export default UserList;