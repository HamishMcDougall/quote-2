import React, { Component } from 'react';

import { Row, Col, Input, Button } from 'antd';



class TopNav extends Component {



searchBar(e){

}

  render() {
    return (
      <div className="TopNav padding10">
        <Row>
          <Col span={4}>
            TAC prototype
          </Col>

          <Col span={2}>

          </Col>
          <Col span={8}>
            <Input placeholder="Search for anything" onChange={this.searchBar.bind(this)} />
          </Col>
          <Col span={8}>
              <Button className="searchButton">Search</Button>
          </Col>



        </Row>
    </div>

    );
  }
}

export default TopNav;
