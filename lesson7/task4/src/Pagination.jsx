import React, { Component } from 'react';

class Pagination extends Component {

    state = {
            currentPage:1,
            rigth: true,
            left: false
    }

    goNext = () => {
        if (this.state.currentPage === 0) {
            this.setState({
                rigth: true,
                left: false,
                currentPage: ++this.state.currentPage
            });
        }
    }

    goPrev = () => {
         if (this.state.currentPage === 1) {
            this.setState({
                rigth: false,
                left: true,
                currentPage: --this.state.currentPage
            });
        }  
    }

    render() {
        return(
                <div className="pagination">
                    <button className="btn" onClick={this.goPrev} disabled={this.state.left}>{this.state.currentPage === 0 ? "": '←'}</button>
                    <span className="pagination__page">{this.state.currentPage}</span>
                    <button className="btn" onClick={this.goNext} disabled={this.state.rigth}>{this.state.currentPage === 1 ? "": '→'}</button>
                </div>
        );
    }
};

export default Pagination;