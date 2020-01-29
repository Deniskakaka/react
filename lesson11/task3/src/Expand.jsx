import React from 'React';
import PropTypes from 'prop-types';

class Expand extends React.Component {
    state = {
        isOpen: false,
    }

    showText = () => {
        this.setState({
            isOpen: true
        })
    }

    hideText = () => {
        this.setState({
            isOpen: false
        })
    }
    render() {
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{this.props.title}</span>
                    <button className="expand__toggle-btn" onClick={!this.state.isOpen ? this.showText : this.hideText}>
                    <i className={this.state.isOpen ? 'fas fa-long-arrow-alt-up down' : 'fas fa-long-arrow-alt-up'}></i>
                    </button>
                </div>
                {!this.state.isOpen ? null : this.props.children}
            </div>
        )
    }
    
};

Expand.propTypes = {
    title: PropTypes.string,
};

Expand.defaultProps = {
    title: '',
}

export default Expand;