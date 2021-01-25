/*
 * @Description: Messages Actions Files
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-23 15:38:09
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-25 11:25:21
 */
import { CREATE_MESSAGE, GET_ERRORS } from './types';

// CREATE MESSAGE
export const createMessage = (msg) => ({
  type: CREATE_MESSAGE,
  payload: msg,
});

// RETURN ERRORS
export const returnErrors = (msg, status) => ({
  type: GET_ERRORS,
  payload: { msg, status },
});
