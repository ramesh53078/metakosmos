import React from 'react';

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
import { Card, CardHeader, CardBody, Row, Col,CardImg,CardText, CardTitle, Table } from "reactstrap";

function SessionSummary() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>Data Flow Diagram</CardHeader>
              <CardBody>
                <Row>
                  <Col md="3">
                    <CardTitle>Tier 1 Data</CardTitle>
                  </Col>
                  <Col md="3">
                    <CardTitle>Tier 2 Data</CardTitle>
                  </Col>
                  <Col md="3">
                    <CardTitle>Tier 3 Data</CardTitle>
                  </Col>
                  <Col md="3">
                    <CardTitle>Tier 4 Data</CardTitle>
                  </Col>
                </Row>

                <Row>
                  <Col md="3">
                    <CardTitle>Tier 1 Data</CardTitle>
                  </Col>
                  <Col md="3">
                    <CardTitle>Tier 2 Data</CardTitle>
                  </Col>
                  <Col md="3">
                    <CardTitle>Tier 3 Data</CardTitle>
                  </Col>
                  <Col md="3">
                    <CardTitle>Tier 4 Data</CardTitle>
                  </Col>
                </Row>

                <Row>
                  <Col md="3">
                    <CardTitle>Tier 1 Data</CardTitle>
                  </Col>
                  <Col md="3">
                    <CardTitle>Tier 2 Data</CardTitle>
                  </Col>
                  <Col md="3">
                    <CardTitle>Tier 3 Data</CardTitle>
                  </Col>
                  <Col md="3">
                    <CardTitle>Tier 4 Data</CardTitle>
                  </Col>
                </Row>
                
                <Row>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SessionSummary;