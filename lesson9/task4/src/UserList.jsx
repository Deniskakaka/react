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
                            .filter(user => user.name === this.state.value)
                            .map(user => <User key={user.id} name={user.name} age={user.age}/>)
        return (
            <div>
                <div className="filter">
                  <Filter count={filterList.length}/>
                    <input 
                        type="text" 
                        className="filter__input"
                        onChange={this.handleChange}
                        value={this.state.value} 
                    />
                </div>
                <ul className="users">
                    {filterList}
                </ul>
            </div>
        )
    }
};

export default UserList;