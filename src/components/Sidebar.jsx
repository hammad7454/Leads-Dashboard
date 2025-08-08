// src/components/Sidebar.jsx
import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './Sidebar.css'; // 🔹 Import the CSS file

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={220} className="sidebar">
      <div className="sidebar-logo">almà</div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{
          borderRight: 0,
          background: 'transparent',
        }}
      >
        <Menu.Item  style={{fontWeight: 'bold', fontSize: '18px'}}>
          Leads
        </Menu.Item>
        <Menu.Item >
          Settings
        </Menu.Item>
      </Menu>

      <div className="sidebar-admin">
        <Avatar style={{ backgroundColor: 'aliceblue', marginRight: 10 , color: "black" , fontWeight:"bold" }}>A</Avatar>
        <span>Admin</span>
      </div>
    </Sider>
  );
};

export default Sidebar;
