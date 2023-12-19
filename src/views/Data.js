import React from 'react';

import PictureImage1 from 'assets/img/data/Picture1.png';
import PictureImage2 from 'assets/img/data/Picture2.png';
import PictureImage3 from 'assets/img/data/Picture3.png';
import PictureImage4 from 'assets/img/data/Picture4.png';
import PictureImage5 from 'assets/img/data/Picture5.png';
import PictureImage6 from 'assets/img/data/Picture6.png';
import PictureImage7 from 'assets/img/data/Picture7.png';
import { Card, CardHeader, CardBody, Row, Col,CardImg,CardText, CardTitle, Table } from "reactstrap";

function Data() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader></CardHeader>
              <CardBody>
              <div className="font-icon-detail">
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
                </div>

                <div className="font-icon-detail">
                <Row>
                  <Col md="4">
                  <img src={PictureImage1}></img>
                  </Col>
                  <Col md="4">
                  <img src={PictureImage2}></img>
                  </Col>
                  <Col md="4">
                  <img src={PictureImage3}></img>
                  </Col>
                </Row>
                </div>

                <div className="font-icon-detail">
                <Row>
                  <Col md="3">
                  <img src={PictureImage4}></img>
                  </Col>
                  <Col md="3">
                  <img src={PictureImage5}></img>
                  </Col>
                  <Col md="3">
                  <img src={PictureImage6}></img>
                  </Col>
                  <Col md="3">
                  <img src={PictureImage7}></img>
                  </Col>
                </Row>
                </div>

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

export default Data;