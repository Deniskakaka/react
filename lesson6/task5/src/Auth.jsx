import React, {Component} from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spiner from './Spiner.jsx';


class Auth extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoggenIn: false,
            spiner: false,
        }
    }
    
    handleLogin = () => {
        this.showSpiner()
        setTimeout(() => {
            this.setState({
                isLoggenIn: true,
                spiner: false
            })
        },2000)
    }

    handleLoginOut = () => {
        this.setState({
            isLoggenIn: false,
        })
    } 

    showSpiner = () => {
        this.setState({
            spiner: true,
        })
    } 

    render(){
        return  <div className="main">
                    {!this.state.isLoggenIn ? <Login click = {this.handleLogin} show={this.state.spiner}/> : <Logout click = {this.handleLoginOut}/>}
                    {!this.state.spiner ? '': <Spiner size ={20}/>}
                </div>
    }
}

export default Auth;