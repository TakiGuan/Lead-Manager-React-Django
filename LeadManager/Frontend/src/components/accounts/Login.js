/*
 * @Description: Login Component File
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-27 13:39:32
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-28 10:39:29
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Dont have an account?
              <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
