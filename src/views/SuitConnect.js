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
                    <div className="font-icon-detail">
                      <Row >
                        <Col 
                          lg="4" 
                          md="4" 
                          sm="4"
                          >
                          </Col>
                          <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          
                          </Col>

                      </Row>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="3"
                    md="3"
                    sm="3"
                  >
                        <div className="font-icon-detail">
                      <Row >
                        <Col 
                          lg="4" 
                          md="4" 
                          sm="4"
                          >
                          <div className="top-left">
                          
                          </div>
                          </Col>
                          <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          </Col>

                      </Row>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="3"
                    md="3"
                    sm="3"
                  > 
                        <div className="font-icon-detail">
                      <Row >
                        <Col 
                          lg="4" 
                          md="4" 
                          sm="4"
                          >
                          <div className="top-left">
                          
                          </div>
                          </Col>
                          <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          
                          </Col>

                      </Row>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="3"
                    md="3"
                    sm="3"
                  > 
                    <div className="font-icon-detail">
                      <Row >
                        <Col 
                          lg="4" 
                          md="4" 
                          sm="4"
                          >
                          </Col>
                          <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          
                          </Col>

                      </Row>
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