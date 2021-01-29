/*
 * @Description: Reducers Index JS
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-22 12:19:58
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-28 14:20:33
 */
import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  leads,
  errors,
  messages,
  auth,
});
