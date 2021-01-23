/*
 * @Description: App Main Entry
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-22 10:43:12
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-23 12:17:06
 */
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';

import store from '../store';

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  transition: transitions.FADE,
};

class App extends Component {
  render() {
    return (
      // 将store传递给所有的component
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
