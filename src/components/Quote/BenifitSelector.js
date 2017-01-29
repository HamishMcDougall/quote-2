import React, { Component } from 'react';

import { Row, Col, Menu, Dropdown, Icon, Card, Button } from 'antd';

import LifeBenefit from '../Benefits/Life/LifeBenefit';
import CIBenefit from '../Benefits/CI/CIBenefit';
import TPDBenefit from '../Benefits/TPD/TPDBenefit';
import IPBenefit from '../Benefits/IP/IPBenefit';





const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">TAL SUPER</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">SMSF</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">Platform Super</a>
    </Menu.Item>
  </Menu>
);

class BenifitSelector extends Component {


  render() {

    var todoEntries = this.props.entries;
    var deleteMe = this.props.handler;



    function createTasks(item) {
      var typeofComponent = item.type;
      var renderComponent

      if(typeofComponent === 'Life Cover'){
        renderComponent =  <LifeBenefit/>
      } else if (typeofComponent === 'Critical Illness'){
        renderComponent =  <CIBenefit/>
      }else if (typeofComponent === 'Total & Permanent Disability'){
        renderComponent =  <TPDBenefit/>
      }else if (typeofComponent === 'Income Protection'){
        renderComponent =  <IPBenefit/>
      }


      return(
    <div key={item.id} id={item.id}>
        <div className="BenifitsSpacer">
      <Card>
        <Row>
          <Col span={18}><h3><b>{typeofComponent}</b></h3></Col>
          <Col span={5}>
          Ownership &nbsp;
          <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
              Individual <Icon type="down" />
              </a>
          </Dropdown>
          </Col>
          <Col span={1}><Button onClick={deleteMe.bind(this, item)}>X</Button></Col>
       </Row>
       <Row>
         <Col span={24}>
            {renderComponent}
         </Col>
      </Row>
    </Card>
      </div>
  </div>
    )}

    var listItems = todoEntries.map(createTasks);

    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default BenifitSelector;
