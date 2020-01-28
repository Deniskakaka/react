import React from 'React';

const Expand = ({title, children,isOpen,show, hide}) => {
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={!isOpen ? show : hide}>
                <img className={isOpen ? 'down': 'up'} src="https://img.icons8.com/metro/26/000000/thick-arrow-pointing-down.png"></img>
                </button>
            </div>
            {children}
        </div>
    )
};

export default Expand;