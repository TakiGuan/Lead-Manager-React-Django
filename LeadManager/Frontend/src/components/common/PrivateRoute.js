/*
 * @Description: Common Private Route Component
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-28 14:28:45
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-29 11:14:39
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) {
        return <h2>Loading...</h2>;
      }
      if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      }
      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
