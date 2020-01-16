import React, {Component} from 'react';
import Greeting from './Greeting.jsx';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggenIn: false
        }
    }
    
    handleLogin = () => {
        this.setState({
            isLoggenIn: true
        })
    }

    handleLoginOut= () => {
        this.setState({
            isLoggenIn: false
        })
    } 


    render() {
        let button = this.state.isLoggenIn
            ?  button = <button className="login btn" onClick={this.handleLoginOut}>
                            Logout
                        </button>
            :  button = <button className="logout btn" onClick={this.handleLogin}>
                            Login
                        </button>

        return (
            <div className="panel">
                <Greeting isLoggenIn = {this.state.isLoggenIn}/>
                <div>{button}</div>
            </div>
        )
    }
}

export default Auth;