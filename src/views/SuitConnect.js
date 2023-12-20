import React from 'react';
import PictureImage1 from 'assets/img/suitconnect/Picture8.png';
import PictureImage2 from 'assets/img/suitconnect/Picture9.png';
import PictureImage3 from 'assets/img/suitconnect/Picture10.png';
import PictureImage4 from 'assets/img/suitconnect/Picture11.png';

import { Card, CardHeader, CardBody, Row, Col,CardImg,CardText, CardTitle, Table,Button } from "reactstrap";
import { Link } from 'react-router-dom';

function SuitConnect() {
  return (
    <>
    
      <div className="content">
        <Row>
          <Col md="12">
            <Card 
            // style={{backgroundColor:'rgba(136,120,130,255)'}}
            >
              <CardHeader>

              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                 
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="3"
                    md="3"
                    sm="3"
                  > 
                  <h3>SUIT BRIDGE</h3>
                    <div className="font-icon-detail">
                    <br></br>
                    <img src={PictureImage4}></img>
                            <img src={PictureImage1}></img>
                          
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="3"
                    md="3"
                    sm="3"
                  >
                    <h3>CONNECTION</h3>
                    <div className="font-icon-detail">
                      <h4 style={{ marginBottom: '19%' }}>Bluetooth</h4>
                      <h4 style={{ marginBottom: '19%' }}>Wi-Fi</h4>
                      <h4 style={{ marginBottom: '19%' }}>Lora</h4>
                      <h4 style={{ marginBottom: '19%' }}>Cellular</h4>
                      <h4 style={{ marginBottom: '20%' }}>WLAN</h4>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="3"
                    md="3"
                    sm="3"
                  > 
                  <h3>WHITE BOX</h3>
                        <div className="font-icon-detail">
                        <img style={{ marginBottom: '31%' }} src={PictureImage2}></img>
                        <h4 style={{ marginBottom: '31%' }}>Upgrade</h4>
                        <h4 style={{ marginBottom: '31%' }}>Backup</h4>
                        </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="3"
                    md="3"
                    sm="3"
                  > 
                  <h3>CHARGE</h3>
                    <div className="font-icon-detail">
                      <img style={{ marginBottom: '25%' }} src={PictureImage3}></img>
                        <h4 style={{ marginBottom: '25%' }}>Cell</h4>
                        <h4 style={{ marginBottom: '24%' }}>Cell Health</h4>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SuitConnect;