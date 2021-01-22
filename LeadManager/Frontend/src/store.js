/*
 * @Description: Redux Store JS
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-22 11:53:43
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-22 16:03:44
 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

// store中存储了所有的reducer返回的state
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
