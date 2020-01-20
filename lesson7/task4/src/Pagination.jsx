import React, { Component } from 'react';

const Pagination = (props) => {
        return(
                <div className="pagination">
                    <button className="btn" onClick={props.goPrev} disabled={props.left}>{props.currentPage === 0 ? "": '←'}</button>
                    <span className="pagination__page">{props.currentPage}</span>
                    <button className="btn" onClick={props.goNext} disabled={props.rigth}>{props.currentPage === 1 ? "": '→'}</button>
                </div>
        );
};

export default Pagination;