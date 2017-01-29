import React, { Component } from 'react';

import {  Row, Col, Input, } from 'antd';


class BusinessE extends Component {

  constructor(props) {
    super(props);
    this.state = {
      price: "0",
    };
  }

  sumInsuredInput(e){
    const sumInsuredMultiplier = 0.0000342;

    let sumValue = e.target.value;
    let newPrice = ((+sumValue) *sumInsuredMultiplier).toFixed(2);;
    this.setState({price:newPrice})
//     console.log(sumValue);
  }

  render() {

    return (
      <div>
        <hr/>
          <br/>
          <h3><b>Business Expenses</b></h3>
              <Row gutter={16}>
                <Col className="gutter-row" span={8}>

                  <Row gutter={16}>

                    <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      <h6>Sum Insured</h6>
                      <Input placeholder="Sum Insured"  type="number" onChange={this.sumInsuredInput.bind(this)}/>
                    </div>
                    </Col>

                    <Col className="gutter-row" span={24}>
                    <div className="gutter-box">
                      Premium
                    </div>
                    </Col>

                    <Col className="gutter-row" span={24}>
                    <div className="gutter-box">
                      <h3>$ {this.state.price} <span className="perMonth">per month</span></h3>
                    </div>
                  </Col>

                  </Row>
                </Col>
                <Col className="gutter-row" span={16}>

                </Col>
              </Row>
      </div>



    );
  }
}

export default BusinessE;
