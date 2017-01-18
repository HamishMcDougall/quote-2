import React, { Component } from 'react';

import { Row, Col, Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}



class ComissionSettings extends Component {

  render() {
    return (

      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <div className="gutter-box">

          <Col className="gutter-row" span={12}>
            <div className="gutter-box">
                <p>Additional Options </p>
                <p><Checkbox onChange={onChange}>Premium Relief</Checkbox></p>
                <p><Checkbox onChange={onChange}>Business Insurance</Checkbox></p>
            </div>
          </Col>

          <Col className="gutter-row" span={12}>
            <div className="gutter-box">
                <p>Additional Options </p>
                <p><Checkbox onChange={onChange}>Premium Relief</Checkbox></p>
                <p><Checkbox onChange={onChange}>Business Insurance</Checkbox></p>
            </div>
          </Col>



          </div>
        </Col>
        </Row>


    );
  }
}

export default ComissionSettings;
