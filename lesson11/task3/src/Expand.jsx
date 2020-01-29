import React from 'React';
import PropTypes from 'prop-types';

const Expand = ({title, children,isOpen,show, hide}) => {
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={!isOpen ? show : hide}>
                <i className={isOpen ? 'fas fa-long-arrow-alt-up down' : 'fas fa-long-arrow-alt-up'}></i>
                </button>
            </div>
            {children}
        </div>
    )
};

Expand.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired
};

Expand.defaultProps = {
    title: '',
    isOpen: false
}

export default Expand;