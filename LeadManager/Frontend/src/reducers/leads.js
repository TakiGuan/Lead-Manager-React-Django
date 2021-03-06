/*
 * @Description: Leads Reducer
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-22 12:31:17
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-23 15:04:13
 */
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types';

const initialState = {
  leads: [],
};

export default function leads(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };
    default:
      return state;
  }
}
