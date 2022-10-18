import React from "react";
import { Content, Header } from 'antd/lib/layout/layout';
import { Col, Row, Card, Button, Input } from "antd";
import { FormOutlined } from "@ant-design/icons";

function Dash (){
  return (
    <div className="container">
      <Content>
        <Card className='Full-Card'>
          <Row>
            <Col>
            <h3 className="Title1"> 3-Entity Details Auto-fill</h3>
            </Col>
          </Row>

          <Row className="Row1">
            <Col>
            <label>Entity Name <b className="red-star">*</b></label><br/>
            <input type="text" className="Entity"/>
            </Col>

            <Col offset={1}>
            <label>PAN Number <b className="red-star">*</b></label><br/>
            <input type="text" />
            
            </Col>

            <Col offset={1}>
            <label> Date of Incorporation <b className="red-star" >*</b> </label><br/>
<Input type="text" />
            </Col>

            <Col offset={1}>
            <label>Type of Constitution  <b className="red-star" >*</b> </label><br/>
<Input type="text"/>
            </Col>
          </Row>

          <Row className="Row2">
            <Col>
            <label> Gst No. <b className="red-star">*</b></label>
            <Input type="text"/>
            </Col>

            <Col offset={1}>
            <label>Date OF Registration<b className="red-star">*</b></label>
            <Input type="text"/>
            </Col>

            <Col offset={1}>
            <label>Get Certificate<b className="red-star">*</b></label>
            <Input type="text"/>
            </Col>
          </Row>

          <Row className="Row3">
            <Col>
            <label>Nature Of Business<b className="red-star">*</b></label>
            <Input type="text"/>
            </Col>

           <Col offset={1}>
           <label> Industry <b className="red-star" >*</b> </label><br/>
<Input type="text"  />
           </Col> 

           <Col offset={1}>
           <label>Prefered Communication  <b className="red-star" >*</b> </label><br/>
           <Input type="text"/>
           </Col>


          </Row>

        </Card>
      </Content>

    </div>
  )
}

export default Dash;