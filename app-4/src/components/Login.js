import React, { Component } from 'react';

class Login extends Component {
    constructor () {
        super();
        this.state = {
            username: '',
            password: '',

        }
        this.infoAlert = this.infoAlert.bind(this);
    }

    changeUsername (val) {
        this.setState({username: val})
    }

    changePassword (val) {
        this.setState({password: val})
    }

    infoAlert() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render () {
        return (
            <div>
                <input placeholder="Username" onChange={(e) => this.changeUsername(e.target.value)}></input>
                <input placeholder="Password" onChange={(e) => this.changePassword(e.target.value)}></input>
                <button onClick={this.infoAlert}>Login</button>
            </div>
        )
    }
}

export default Login;