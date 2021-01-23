/*
 * @Description: Messages Reducer
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-23 15:26:31
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-23 15:35:35
 */
import { GET_MESSAGES, CREATE_MESSAGE } from '../actions/types';

const initialState = {};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
    case CREATE_MESSAGE:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
