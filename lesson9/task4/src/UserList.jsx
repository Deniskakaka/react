'user strict'
import React, { Component } from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UserList extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    
    render() {
        const filterList = this.props.users
                            .filter(user => 
                                this.state.value === '' ? '' : user.name.toLowerCase().includes(this.state.value))
                            .map(user => <User key={user.id} name={user.name} age={user.age}/>)
              console.log(filterList)              
        return (
            <div>
                <Filter 
                    count={filterList.length}
                    onChange={this.handleChange}
                    filterText={this.state.value} 
                />
                <ul className="users">
                    {filterList}
                </ul>
            </div>
        )
    }
};

export default UserList;