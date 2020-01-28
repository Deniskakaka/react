import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({children, title, isOpen, close}) => {
    if (!isOpen) {
        return null;
    }
    return(
        <div className="dialog">
            <div className="dialog__heading">
                <div className="dialog__title">{title}</div>
                <button className="dialog__close-btn" onClick={close}>+</button>
            </div>
            <div className="dialog__content">{children}</div>
        </div>
    )
};

Dialog.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

Dialog.defaultProps = {
    title: '',
    isOpen: false
}

export default Dialog;
