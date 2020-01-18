import React, { Component } from 'react';

class Pagination extends Component {

    state = {
            currentPage:0,
            rigth: false,
            left: true
    }

    goNext = () => {
        this.setState({
             currentPage: ++this.state.currentPage
        });
        this.On()
    }

    goPrev = () => {
        this.setState({
            currentPage: --this.state.currentPage
        });
       this.Off()
    }

    On = () => {
        if (this.state.currentPage === 1) {
            this.setState({
                rigth:true,
                left: false
            });
        }
    }

    Off = () => {
        if (this.state.currentPage === 0) {
            this.setState({
                rigth:false,
                left: true
            });
        }
    }

    render() {
        return(
                <div className="pagination">
                    <button className="btn" onClick={this.goPrev} disabled={this.state.left}>{this.state.currentPage === 0 ? "": '←'}</button>
                    <span className="pagination__page">{this.state.currentPage}</span>
                    <button className="btn" onClick={this.goNext} disabled={this.state.rigth}>{this.state.currentPage === 1? "": '→'}</button>
                </div>
        );
    }
};

export default Pagination;