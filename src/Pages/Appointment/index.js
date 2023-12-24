import React from 'react';
import './index.css';
import lawyersData from '../../constants/lawyersData.json'
import { Space, Table, Tag } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Speciality',
      dataIndex: 'speciality',
      key: 'speciality',
    },
    {
        title: 'Firm',
        dataIndex: 'firms',
        key: 'firms',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },

    {
        title: 'Phone Number',
        dataIndex: 'phone_number',
        key: 'phone_number',
    },
    
    {
        title: 'Available Time',
        dataIndex: 'available_time',
        key: 'available_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Book Lawyer {record.name}</a>
     
        </Space>
      ),
    },
  ];


function Appointment() {
  return (
    <div>
      <Table columns={columns} dataSource={lawyersData} 
             pagination={{
                defaultPageSize: 30, 
              }}
      />;
    </div>
  )
}

export default Appointment
