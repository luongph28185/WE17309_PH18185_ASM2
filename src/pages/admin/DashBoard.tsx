import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  // TeamOutlined,
  // UploadOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  // TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const DashBoard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider className='bg-black'>
      <Sider className='bg-black'
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 100,
          // bottom: 0,
        }}
      >
        <div style={{ height: 32, margin: 16, background: 'white' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      
      
    </Layout>
  );
};

export default DashBoard;