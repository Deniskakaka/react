import React from 'react';

const Login = (props) => {
    if (props.show) {
        return null;
    }
    return <button className="login btn" onClick={props.click}>Login</button>
}

export default Login;