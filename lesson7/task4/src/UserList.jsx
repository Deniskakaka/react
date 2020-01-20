import React, { Component } from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UserList extends Component {

    state = {
        currentPage:1,
        rigth: true,
        left: false,
        totalItems:1
    }

    goNext = () => {
        if (this.state.currentPage === 0) {
            this.setState({
                rigth: true,
                left: false,
                totalItems: 5,
                currentPage: ++this.state.currentPage
            });
        }
    }

    goPrev = () => {
        if (this.state.currentPage === 1) {
            this.setState({
                rigth: false,
                left: true,
                totalItems:10,
                currentPage: --this.state.currentPage
            });
        }  
    }

    render() {
         return (<div>
                <Pagination  
                    totalItems={this.length}
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    left={this.state.left}
                    right={this.state.right}
                    currentPage={this.state.currentPage}
                />
                <ul className="users">
                    {this.props.users.slice(0, this.state.totalItems).map(user => 
                        <User  key={user.id} name={user.name} age={user.age}/>
                    )}
                </ul>
           </div>)
    }
}

export default UserList;