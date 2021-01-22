/*
 * @Description: App Main Entry
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-22 10:43:12
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-22 15:58:08
 */
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      // 将store传递给所有的component
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
