import React, { Component } from 'react'
import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.interceptors.request.use(function (config) {
    const authHeaders = JSON.parse(window.localStorage.getItem('authHeaders'))
    if(authHeaders) {
        config.headers[config.method] = {
            'access-token': authHeaders['access-token'],
            'client': authHeaders['client'],
            'uid': authHeaders['uid']
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error)
});

axios.interceptors.response.use(function (response) {
    if(response.headers['access-token']) {
        const authHeaders = {
            'access-token': response.headers['access-token'],
            'client': response.headers['client'],
            'uid': response.headers['uid'],
            'expiry': response.headers['expiry'],
            'token-type': response.headers['token-type']
        }
        window.localStorage.setItem('authHeaders', JSON.stringify(authHeaders));
    } else {
        window.localStorage.removeItem('authHeaders');
    }
    return response;
}, function (error) {
    return Promise.reject(error)
});


class Login extends Component {

    state = {
        notification: ''
    }

    render() {
        return (
            <form>
                <h3>Login</h3>
                <div className="form-group email_input">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" autoFocus name="user[email]" id="user_email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="user[password]" id="user_password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block login"
                    onClick={this.login}>
                    Submit
                </button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <span className="notification">
                  {this.state.notification}
                </span>
            </form>
        );
    }

    login = () => {
        axios.post(
            'http://localhost:3000/auth/sign_in',
            {
                email: document.getElementById('user_email').value,
                password: document.getElementById('user_password').value
            }
        )
            .then(response => {
                if (response.status === 200) {
                    this.props.history.push("/");
                    console.log('Successfully Login');
                }
            })
            .catch(error => console.log('api errors:', error))
    }

    resetNotification = () => {
        this.setState({notification: ''})
    }
}

export default Login
