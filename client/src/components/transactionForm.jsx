import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const TransactionForm = ({ onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="transaction"
      initialValues={initialValues}
      onFinish={onSubmit}
    >
      <Form.Item
        label="Users"
        name="users"
        rules={[{ required: true, message: 'Please select users' }]}
      >
        <Select mode="multiple" placeholder="Select users">
          <Option value="user1">User 1</Option>
          <Option value="user2">User 2</Option>
          <Option value="user3">User 3</Option>
          <Option value="user4">User 4</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: 'Please select a category' }]}
      >
        <Select placeholder="Select a category">
          <Option value="food">Food</Option>
          <Option value="entertainment">Entertainment</Option>
          <Option value="bills">Bills</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Please enter a valid amount' }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TransactionForm;
