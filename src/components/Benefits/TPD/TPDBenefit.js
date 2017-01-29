import React, { Component } from 'react';

import {  Row, Col, Input, Checkbox, Radio } from 'antd';


   const RadioGroup = Radio.Group;


   const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '20px',
      };



class TPDBenefit extends Component {


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
      //   console.log(sumValue);
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
            Benefit
            <hr/>
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <b>TPD Definition </b><br/><br/>
                  <RadioGroup onChange={this.radioOnChange.bind(this)} value={this.state.value}>
                      <Radio style={radioStyle} value={1}>Any Occupation</Radio>
                      <Radio style={radioStyle} value={2}>Own Occupation</Radio>
                      <Radio style={radioStyle} value={3}>Activites of Daily Living</Radio>
                    </RadioGroup>

                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                    Additional Options <br/><br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>Premium Relief</Checkbox> <br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>Superlinked benefit</Checkbox> <br/>
                      <Checkbox onChange={this.checkOnChange.bind(this)}>Death buyback</Checkbox> <br/>
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

export default TPDBenefit;
