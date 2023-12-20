import React from 'react';
import PictureImage1 from 'assets/img/suitconnect/Picture8.png';
import PictureImage2 from 'assets/img/suitconnect/Picture9.png';
import PictureImage3 from 'assets/img/suitconnect/Picture10.png';
import PictureImage4 from 'assets/img/suitconnect/Picture11.png';

import { Card, CardHeader, CardBody, Row, Col,CardImg,CardText, CardTitle, Table,Button } from "reactstrap";
import { Link } from 'react-router-dom';

const customStyles = {
  textAlign: 'center',
  padding: '45px 0 30px',
  border: '3px solid #4472c4',
  borderRadius: '35px',
  margin: '15px 0',
  maxHeight: '100vh',
};

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
                  <h3 style={{textAlign:'center'}}>SUIT BRIDGE</h3>
                    <div className="" style={customStyles}>
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
                    <h3 style={{textAlign:'center'}}>CONNECTION</h3>
                    <div className="" style={customStyles}>
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
                  <h3 style={{textAlign:'center'}}>WHITE BOX</h3>
                        <div className="" style={customStyles}>
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
                  <h3 style={{textAlign:'center'}}>CHARGE</h3>
                    <div className="" style={customStyles}>
                      <img style={{ marginBottom: '23%' }} src={PictureImage3}></img>
                        <h4 style={{ marginBottom: '24%' }}>Cell</h4>
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