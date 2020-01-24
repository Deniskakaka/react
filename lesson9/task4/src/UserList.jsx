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
        const firstLetter = this.state.value.slice(0,1).toUpperCase();
        const otherText = this.state.value.slice(1).toLowerCase();
        const filterList = this.props.users
                            .filter(user => user.name === (firstLetter + otherText) )
                            .map(user => <User key={user.id} name={user.name} age={user.age}/>)
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