/*
 * @Description: Messages Actions Files
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-23 15:38:09
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-23 15:44:52
 */
import { CREATE_MESSAGE } from './types';

export const createMessage = (msg) => ({
  type: CREATE_MESSAGE,
  payload: msg,
});
