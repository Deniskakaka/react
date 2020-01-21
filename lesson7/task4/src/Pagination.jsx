import React, { Component } from 'react';

const Pagination = (props) => {
        const {currentPage, isLastPage,goPrev,goNext,itemsPerPage} = props
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
                        disabled={currentPage === Math.floor(isLastPage / itemsPerPage) ? true: false}>
                        {currentPage === Math.floor(isLastPage / itemsPerPage)? "": '→'}
                    </button>
                </div>
        );
};

export default Pagination;