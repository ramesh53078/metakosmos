import React from 'react'
import Pic from 'assets/img/Suit-Tile-Logo.gif';
import UserGuideImage from 'assets/img/userguide/UserGuide.png';
import UserGuideVideo from 'assets/Kosmosuit.mp4';
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
                    
                  </CardHeader>
                  <CardBody  style={{textAlign:'center'}}>
                  {/* <img style={{marginBottom:'7%'}} src={UserGuideImage}></img> */}
                  <video width={1020} height={680} controls autoPlay muted>
                    <source src={UserGuideVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                   <Row className='flex-end'>
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
