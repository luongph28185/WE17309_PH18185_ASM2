import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <>
    <Row >
      <Col span={24}>
       <Link to={'/products'}> <img className="w-[2000px]"  src="./src/assets/TTL.jpg" alt="" /></Link>
        </Col>
    </Row>
    <Row className='mt-4 '>
      <Col className=''  span={8}>
      <img className='w-[490px]' src="https://theme.hstatic.net/1000306633/1000891824/14/block_home_category1_new.png?v=490" alt="" />
      </Col>
      <Col span={8}>
        <img className='w-[490px]' src="https://theme.hstatic.net/1000306633/1000891824/14/block_home_category2_new.png?v=490" alt="" />
      </Col>
      <Col span={8}>
        <img className='w-[490px]' src="https://theme.hstatic.net/1000306633/1000891824/14/block_home_category3_new.png?v=490" alt="" />
      </Col>
    </Row>
  </>
);

export default HomePage;