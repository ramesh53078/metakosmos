import React from 'react'
import Pic from 'assets/img/Suit-Tile-Logo.gif';
import UserGuideImage from 'assets/img/userguide/UserGuide.png';
// import PictureImage2 from 'assets/img/downloads/Picture2.png';

import { Card, CardHeader, CardBody, Row, Col,CardTitle,Table } from "reactstrap";

function UserGuide() {
    return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
              <Card>
                  <CardHeader>
                    <h3>DEMO USER VIDEO</h3>
                    <img style={{marginLeft:'13%'}} src={UserGuideImage}></img>
                  </CardHeader>
                  <CardBody>
                   <Row className='flex-end' style={{marginLeft:'13%'}}>
                    <Col md="4">
                        <h2>DEVELOPERS</h2>
                    </Col>
                    <Col md="4">
                        <h2>SUPPORT</h2>
                    </Col>
                    <Col md="4">
                        <h2>PARTNERSHIP</h2>
                    </Col>
    
                   </Row>
                   <br></br><br></br>
                   
               
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
      )
}

export default UserGuide
