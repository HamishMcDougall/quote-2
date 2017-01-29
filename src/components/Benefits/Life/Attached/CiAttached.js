import React, { Component } from 'react';

import {  Row, Col, Input, Checkbox, Radio, Menu, Dropdown, Icon } from 'antd';







   const RadioGroup = Radio.Group;


   const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '20px',
      };

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

class CiAttached extends Component {


   constructor(props) {
     super(props);
     this.state = {
       value: 1,
       price: "0",
     };
   }




       radioOnChange(e) {
         console.log('radio checked', e.target.value);
         this.setState({
           value: e.target.value,
         });
       }



       checkOnChange(e) {
         console.log(`checked = ${e.target.checked}`);
       }




       stepedlevelSelection(e){
           const levelValue = 4;
           const stepedValue = 2;

         if(e.target.value === "Level"){
           let newPrice = (((+this.state.price) *(+stepedValue)) / (+levelValue)).toFixed(2);
             this.setState({price:newPrice})
         }
         if (e.target.value === "Steped") {
           let newPrice = (((+this.state.price) *(+levelValue )) / (+stepedValue)).toFixed(2);
             this.setState({price:newPrice})
         }
       }

       sumInsuredInput(e){
         const sumInsuredMultiplier = 0.002;

         let sumValue = e.target.value;
         let newPrice = ((+sumValue) *sumInsuredMultiplier).toFixed(2);;
         this.setState({price:newPrice})
         console.log(sumValue);
       }


       indexOffOn(e){
         const indexValue = 20.5;

           if(e.target.checked){
               let newPrice = ((+this.state.price) + (+indexValue)).toFixed(2);
                 this.setState({price:newPrice})
           } else{
             let newPrice = ((+this.state.price) - (+indexValue)).toFixed(2);
               this.setState({price:newPrice})
           }
       }


  render() {







    return (
      <div>
      <hr/>
      <br/>
      <Row gutter={16}>

        <Col className="gutter-row" span={18}>
          <div className="gutter-box">
          <h5><Icon type="retweet" /> &nbsp;<b>Attached Critical Illness Cover</b></h5>
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <div className="gutter-box">
          Ownership: &nbsp;
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                Individual <Icon type="down" />
                </a>
            </Dropdown>
          </div>
        </Col>


        </Row>

        <Row gutter={16}>

          <Col className="gutter-row" span={8}>
            <div className="gutter-box">
            <br/>
            <h6>Sum Insured</h6>
                <Row gutter={16}>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      <Input placeholder="Sum Insured"  type="number" onChange={this.sumInsuredInput.bind(this)}/>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                            <Checkbox onChange={this.indexOffOn.bind(this)}>Indexed</Checkbox>
                    </div>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col className="gutter-row" span={24}>
                    <div className="gutter-box">
                      <Radio.Group onChange={this.stepedlevelSelection.bind(this)}>
                        <Radio.Button value="Steped">Steped</Radio.Button>
                        <Radio.Button value="Level">Level</Radio.Button>
                      </Radio.Group>
                    </div>
                  </Col>
                </Row>

                <Row gutter={16}>
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

            </div>
          </Col>

          <Col className="gutter-row" span={16}>
            <div className="gutter-box">
            Benefits
            <hr/>
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  TPD Definition <br/><br/>
                  <RadioGroup onChange={this.radioOnChange.bind(this)} value={this.state.value}>
                      <Radio style={radioStyle} value={1}>Standard</Radio>
                      <Radio style={radioStyle} value={2}>Premier</Radio>
                    </RadioGroup>

                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                    Additional Options <br/><br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>Premium Relief</Checkbox> <br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>Business Insurance</Checkbox> <br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>CI Reinstatement</Checkbox> <br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>Double CI</Checkbox>
                </div>
              </Col>
            </Row>






            </div>
          </Col>

          </Row>






      </div>

    );
  }
}

export default CiAttached;
