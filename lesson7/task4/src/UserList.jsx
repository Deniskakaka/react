import React, { Component } from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UserList extends Component {

    state = {
        currentPage:0,
        itemsPerPage:4,
        isLastPage: this.props.users.length - 1
    }

    goNext = () => {
            this.setState({
                currentPage: ++this.state.currentPage,
            });
    }
   
    goPrev = () => {
            this.setState({
                currentPage: --this.state.currentPage
            })
    }
    

    render() {
         let startIndex = this.state.currentPage * this.state.itemsPerPage;
         let showUser = this.props.users.slice(startIndex, this.state.itemsPerPage + startIndex ).map(user => 
                            <User  key={user.id} name={user.name} age={user.age}/>
                        )
         return (<div>
                <Pagination  
                    totalItems={this.length}
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    itemsPerPage={this.state.itemsPerPage}
                    currentPage={this.state.currentPage}
                    isLastPage={this.state.isLastPage}
                />
                <ul className="users">
                    {showUser}
                </ul>
           </div>)
    }
}

export default UserList;