import React, { Component } from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UserList extends Component {

    state = {
        currentPage:0,
        rigth: true,
        left: false,
        itemsPerPage:3
    }

    goNext = () => {
       if (this.state.currentPage < this.state.itemsPerPage) {
            this.setState({
                currentPage: ++this.state.currentPage
            });
       } else {
            this.setState({
                rigth: true,
                left: false,
            });
       }
           
    }

    goPrev = () => {
        if (this.state.currentPage > 0) {
            this.setState({
                currentPage: --this.state.currentPage
            })
        } else {
            this.setState({
                rigth: false,
                left: true,
            })
        }
           
    }

    render() {
        let startIndex = this.state.currentPage * this.state.itemsPerPage;
         return (<div>
                <Pagination  
                    totalItems={this.length}
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    left={this.state.left}
                    right={this.state.right}
                    currentPage={this.state.currentPage}
                    itemsPerPage={this.state.itemsPerPage}
                />
                <ul className="users">
                    {this.props.users.slice(startIndex, this.state.itemsPerPage + startIndex ).map(user => 
                        <User  key={user.id} name={user.name} age={user.age}/>
                    )}
                </ul>
           </div>)
    }
}

export default UserList;