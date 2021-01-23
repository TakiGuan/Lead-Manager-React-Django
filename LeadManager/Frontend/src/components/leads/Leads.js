/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/control-has-associated-label */
/*
 * @Description: Leads JS
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-22 11:00:18
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-23 17:00:56
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <h1>Leads Lists</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td> {lead.id} </td>
                <td> {lead.name} </td>
                <td> {lead.email} </td>
                <td> {lead.message} </td>
                <td>
                  <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

// connect函数可以接受两个参数，两个都是回调函数，第一个回调函数中接收store中的state，
// 意思是将store中的state映射到Leads组件的props中，第二个回调函数中接收store的dispatch，
// 返回一个对象，对象包含所需的action的dispatch函数
export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
