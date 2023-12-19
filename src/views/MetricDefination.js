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
import { Card, CardHeader, CardBody, Row, Col,CardTitle,Table } from "reactstrap";
function MetricDefination() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
          <Card>
              <CardHeader>

              </CardHeader>
              <CardBody>
               <h2>HUMAN SPACEFLIGHT</h2>
               <h3>PREFLIGHT </h3>
               <Row>
                <Col md="3">
                <h4>ANALOG</h4>
                </Col>
                <Col md="3">
                <h4>NEUTRAL BUOYANCY</h4>
                </Col>
                <Col md="3">
                <h4>CENTRIFUGE</h4>
                </Col>
                <Col>
                <h4>MOCK PLANET</h4>
                </Col>
               </Row>
               <h2>INFLIGHT</h2>
               <Row>
                <Col md="3">
                <img src={MicroGravityImage}></img>
                </Col>
                <Col md="3">
                <img src={MoonImage}></img>
                </Col>
                <Col md="3">
                <img src={MarsImage}></img>
                </Col>
                <Col md="3">
                <img src={AsteroidImage}></img>
                </Col>
               </Row>

               <br></br><br></br>
               <h3>POST FLIGHT</h3>
               <Row>
                <Col md="4">
                <h4>RADIATION IMPACT</h4>
                </Col>
                <Col md="4">
                <h4>VITALS MONITORING</h4>
                </Col>
                <Col md="4">
                <h4>STREGTH TRAINING</h4>
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
