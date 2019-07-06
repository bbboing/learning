import React from 'react';
import {Row, Col }from 'antd';
import { Button } from 'antd';
import './App.css';
import NavLeft from './components/NavLeft'
import CHeader from './components/CHeader'
import CFooter from './components/CFooter'

function App(props) {
  return (
    <div className="App">
      <Row>
        <Col span={4} className='navleft'>
          <NavLeft></NavLeft>
        </Col>
        <Col span={20} className='navR'>
          <CHeader></CHeader>
          <div className='content'>
            {props.children}
          </div>
          <CFooter></CFooter>
        </Col>
      </Row>
    </div>
  );
}

export default App;
