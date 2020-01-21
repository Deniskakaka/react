import React, { Component } from 'react';

const Pagination = (props) => {
        const {currentPage, itemsPerPage,goPrev,goNext} = props
        return(
                <div className="pagination">
                    <button 
                        className="btn" onClick={goPrev} 
                        disabled={currentPage === 0 ? true: false}>
                        {currentPage === 0 ? "": '←'}
                    </button>
                    <span className="pagination__page">{currentPage}</span>
                    <button 
                        className="btn" onClick={goNext} 
                        disabled={currentPage === itemsPerPage ? true: false}>
                        {currentPage === itemsPerPage? "": '→'}
                    </button>
                </div>
        );
};

export default Pagination;