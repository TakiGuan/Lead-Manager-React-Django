/*
 * @Description: Dashboard Function JS
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-22 11:00:40
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-22 11:05:57
 */
import React, { Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  );
}
