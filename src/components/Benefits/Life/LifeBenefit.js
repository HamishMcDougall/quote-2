import React, { Component } from 'react';


import {   Row, Col, Input, Checkbox, Radio } from 'antd';



import TpdAttached from './Attached/TpdAttached';
import CiAttached from './Attached/CiAttached';

import TpdLink from './Linked/TpdLink';
import CiLink from './Linked/CiLink';




function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}





class LifeBenefit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      price: "0",
    };
  }

  sumInsuredInput(e){
    const sumInsuredMultiplier = 0.002;

    let sumValue = e.target.value;
    let newPrice = ((+sumValue) *sumInsuredMultiplier).toFixed(2);;
    this.setState({price:newPrice})
  //  console.log(sumValue);


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





tpdAttached(e){
  if(e.target.checked){
      console.log('attaching TPD');
      this.setState({tpdAttached:<TpdAttached/>})
    //  console.log(tpdAttached);
  }else{
      this.setState({tpdAttached:""})
  }
}




ciAttached(e){
  if(e.target.checked){
      console.log('attaching CI');
      this.setState({ciAttached:<CiAttached/>})
    //  console.log(tpdAttached);
  }else{
      this.setState({ciAttached:""})
  }
}





tpdLink(e){
  if(e.target.checked){
      this.setState({tpdLink:<TpdLink/>})
  }else{
      this.setState({tpdLink:""})
  }
}


ciLink(e){
  if(e.target.checked){
      this.setState({ciLink:<CiLink/>})
  }else{
      this.setState({ciLink:""})
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
                      <h3>${this.state.price} <span className="perMonth">per month</span></h3>
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
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                  <b>Attach</b> <br/> <br/>
                 <Checkbox onChange={this.tpdAttached.bind(this)}>TPD Cover</Checkbox> <br/>
                 <Checkbox onChange={this.ciAttached.bind(this)}>Critical Illness</Checkbox>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                <b>Link</b> <br/> <br/>
                 <Checkbox onChange={this.tpdLink.bind(this)}>TPD Cover</Checkbox> <br/>
                 <Checkbox onChange={this.ciLink.bind(this)}>  Critical Illness</Checkbox>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                  Additional Options <br/> <br/>
                  <Checkbox onChange={onChange}>Premium Relief</Checkbox><br/>
                  <Checkbox onChange={onChange}>Business Insurance</Checkbox>
                </div>
              </Col>
            </Row>


            </div>
          </Col>

          </Row>

        {this.state.tpdAttached}
        {this.state.ciAttached}
        {this.state.tpdLink}
        {this.state.ciLink}
      </div>

    );
  }
}


export default LifeBenefit;
