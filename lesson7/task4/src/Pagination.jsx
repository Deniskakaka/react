import React, { Component } from 'react';

const Pagination = (props) => {
        console.log(props.left)
        return(
                <div className="pagination">
                    <button className="btn" onClick={props.goPrev}>{props.currentPage === 0 ? "": '←'}</button>
                    <span className="pagination__page">{props.currentPage}</span>
                    <button className="btn" onClick={props.goNext}>{props.currentPage === props.itemsPerPage? "": '→'}</button>
                </div>
        );
};

export default Pagination;