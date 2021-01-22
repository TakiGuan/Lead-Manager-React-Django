/*
 * @Description: Reducers Index JS
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-22 12:19:58
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-22 12:31:05
 */
import { combineReducers } from 'redux';
import leads from './leads';

export default combineReducers({
  leads,
});
