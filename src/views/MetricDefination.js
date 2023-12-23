import React from 'react'

import PictureImage1 from 'assets/img/downloads/Picture1.png';
import PictureImage2 from 'assets/img/downloads/Picture2.png';
import MicroGravityImage from 'assets/img/downloads/Microgravity.png';
import MoonImage from 'assets/img/downloads/Moon.jpg';
import MarsImage from 'assets/img/downloads/Mars.jpg';
import AsteroidImage from 'assets/img/downloads/Asteroid.jpg';
import WaterImage from 'assets/img/downloads/Water.png';
import IceCapsImage from 'assets/img/downloads/IceCaps.jpg';
import TerrainImage from 'assets/img/downloads/Terrain.jpg';
import IndustryImage from 'assets/img/downloads/Industry.png';
import FlightsImage from 'assets/img/downloads/Flight.png';
import { Card, CardHeader, CardBody, Row, Col,CardTitle,Table } from "reactstrap";
function MetricDefination() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12" lg="12" sm="3">
          <Card>
              <CardHeader>
              <h2>HUMAN SPACEFLIGHT</h2>
              </CardHeader>
              <CardBody>
               <Row>
                <Col md="1" lg="1"></Col>
                <Col md="2" lg="3">
                <h2 style={{color:'yellow'}}>PREFLIGHT </h2>
                </Col>
               </Row>
               <Row style={{textAlign:'center'}}>
                <Col md="3" lg="3">
                <h3>ANALOG</h3>
                </Col>
                <Col md="3" lg="3">
                <h3>NEUTRAL BUOYANCY</h3>
                </Col>
                <Col md="3" lg="3">
                <h3>CENTRIFUGE</h3>
                </Col>
                <Col md="3">
                <h3>MOCK PLANET</h3>
                </Col>
               </Row>
               
               <br></br><br></br>
               <br></br><br></br>
               <Row>
                <Col md="1"></Col>
                <Col md="2">
                <h2 style={{color:'yellow'}}>INFLIGHT </h2>
                </Col>
               </Row>
               <Row style={{textAlign:'center'}}>
               <Col md="3">
                <img src={FlightsImage} width={'50%'}></img>
                </Col>
                <Col md="3">
                <img src={MicroGravityImage}></img>
                </Col>
                <Col md="3">
                <img src={MoonImage}></img>
                </Col>
                <Col md="3">
                <img src={MarsImage}></img>
                </Col>
               </Row>

               <br></br><br></br>
               <br></br><br></br>
               <Row>
                <Col md="1"></Col>
                <Col md="2">
                <h2 style={{color:'yellow'}}>POST FLIGHT </h2>
                </Col>
               </Row>
               <Row style={{textAlign:'center'}}>
                <Col md="4">
                <h3>RADIATION IMPACT</h3>
                </Col>
                <Col md="4">
                <h3>VITALS MONITORING</h3>
                </Col>
                <Col md="4">
                <h3>STREGTH TRAINING</h3>
                </Col>
               </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default MetricDefination
