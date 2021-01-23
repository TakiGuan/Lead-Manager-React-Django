/*
 * @Description: Error Reducers
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-23 14:45:55
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-23 15:28:21
 */
import { GET_ERRORS } from '../actions/types';

const initialState = {
  msg: {},
  status: null,
};

export default function errors(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
