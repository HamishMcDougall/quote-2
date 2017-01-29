import React, { Component } from 'react';

import { Row, Col, } from 'antd';

import ButtonControler from './components/Quote/ButtonControler';

import LHSMenu from './components/Interface/LHSMenu';
import TopNav from './components/Interface/TopNav';


import './App.css';

import 'antd/dist/antd.css';




class App extends Component {


  render() {
    return (


<div>
    <Row>
      <Col span={24}>
      <TopNav/>
      </Col>
    </Row>
    <Row>
      <Col span={4}>
        <LHSMenu/>
        </Col>
      <Col span={20}>
        <div className="PaddingMain">
          <ButtonControler/>
        </div>
      </Col>
    </Row>
</div>



    );
  }
}

export default App;
