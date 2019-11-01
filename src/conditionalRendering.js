import React from 'react';

class LoginLogout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.isLoggedIn ? 'Welcome Back' : 'Please Sign Up'}</h1>
                <button onClick={this.handleClick}>{this.state.isLoggedIn ? 'Logout' : 'Login'}</button>
            </div>
        );
    }

}

export default LoginLogout;