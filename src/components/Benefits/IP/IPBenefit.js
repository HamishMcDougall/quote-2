import React, { Component } from 'react';

import {  Row, Col, Input, Checkbox, Radio } from 'antd';


import BusinessE from './Options/BusinessE';




   const RadioGroup = Radio.Group;


   const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '20px',
      };



class IPBenefit extends Component {


   constructor(props) {
     super(props);
     this.state = {
       value: 1,
       price: "0",
       value2: 3,
     };
   }



businessE(e){
     if(e.target.checked){
         //console.log('attaching TPD');
         this.setState({businessE:<BusinessE/>})
       //  console.log(tpdAttached);
     }else{
         this.setState({businessE:""})
     }
   }



       radioOnChange(e) {
         console.log('radio checked', e.target.value);
         this.setState({
           value: e.target.value,
         });
       }

       radioOnChange2(e) {
         console.log('radio checked', e.target.value);
         this.setState({
           value2: e.target.value,
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
    //     console.log(sumValue);
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

                  <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                      <div className="gutter-box">
                        <div>
                        Level of Cove<br/>
                          <RadioGroup onChange={this.radioOnChange.bind(this)} value={this.state.value}>
                            <Radio style={radioStyle} value={1}>Standard</Radio>
                            <Radio style={radioStyle} value={2}>Premier</Radio>
                          </RadioGroup>
                        </div>

                        <div>
                          Waiting period:<br/>
                          dropdown
                        </div>

                        <div>
                          <br/>
                          <Checkbox onChange={this.checkOnChange.bind(this)}>Superlinked benefit</Checkbox> <br/>
                        </div>

                      </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <div className="gutter-box">
                      <div>
                        Type of Cover<br/>
                        <RadioGroup onChange={this.radioOnChange2.bind(this)} value={this.state.value2}>
                            <Radio style={radioStyle} value={3}>Indemnity</Radio>
                            <Radio style={radioStyle} value={4}>Agreed value</Radio>
                          </RadioGroup>
                      </div>

                        <div>
                          Beneftit period:<br/>
                          dropdown
                        </div>

                      </div>
                    </Col>
                  </Row>


                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                    Additional Options <br/><br/>
                  <Checkbox onChange={this.checkOnChange.bind(this)}>Increasing claims</Checkbox> <br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>Accident Benefit</Checkbox> <br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>Critical Illness</Checkbox> <br/>
                      <Checkbox disables onChange={this.checkOnChange.bind(this)}>Needlestick benefit</Checkbox><br/>
                      <Checkbox onChange={this.businessE.bind(this)}>Business Expenses</Checkbox> <br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>Retirement Protection</Checkbox><br/>
                </div>
              </Col>
            </Row>






            </div>
          </Col>

          </Row>



          {this.state.businessE}


      </div>

    );
  }
}

export default IPBenefit;
