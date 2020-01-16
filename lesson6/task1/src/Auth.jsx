import React, {Component} from 'react';
import Greeting from './Greeting.jsx';
import Logout from './Loguot.jsx';
import Login from './Login.jsx';

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
        return (
            <div className="panel">
                <Greeting isLoggenIn = {this.state.isLoggenIn}/>
                <div>{this.state.isLoggenIn ? <Logout /> : <Login />}</div>
            </div>
        )
    }
}

export default Auth;