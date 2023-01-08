import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Users',
    dataIndex: 'users',
    key: 'users'
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  }
];

const TransactionList = ({ transactions }) => {
  return (
    <Table dataSource={transactions} columns={columns} rowKey="id" />
  );
};

export default TransactionList;
