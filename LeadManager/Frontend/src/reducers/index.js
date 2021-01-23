/*
 * @Description: Reducers Index JS
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-22 12:19:58
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-23 15:36:27
 */
import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  leads,
  errors,
  messages,
});
