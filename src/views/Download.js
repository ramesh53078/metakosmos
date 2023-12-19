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
function Download() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
          <Card>
              <CardHeader>
                <p>By downloading, installing, or using this software, you agree to be bound by the terms and conditions of the following license agreement. Please read this agreement carefully.
Metakosmos company (“Kosmosuit") grants you a limited, non-exclusive license to use the upgrade software ("Software") in binary executable form in the normal operation of the applicable Metakosmos products. Title, ownership rights, and intellectual property rights in and to the Software remain in Kosmosuit. This license is personal to you and you may make copies of the software only for your personal use. You agree that this license agreement does not need to be signed for it to take effect.
The software is provided on an "as is" basis without warranty of any kind — either expressed or implied — including, without limitation, any implied warranties of merchantability or fitness for a particular purpose. Metakosmos does not warrant the performance of the software or that the software will meet your requirements or operate error free.
You acknowledge that this Software is the property of Metakosmos and is protected under Australia copyright laws and international copyright treaties. You further acknowledge that the structure, organization, and code of the Software are valuable trade secrets of Metakosmos and that the Software in source code form remains a valuable trade secret of Metakosmos. You agree not to decompile, disassemble, modify, reverse assemble, reverse engineer, or reduce to human readable form the Software or any part thereof or create any derivative works based on the Software. You agree not to export or re-export the Software to any country in violation of the export control laws of the United States of America & Defence Export Controls of Australia.</p>
              </CardHeader>
              <CardBody>
               <Row className='flex-end'>
                <Col md="2"></Col>
                <Col md="4">
                    <img src={PictureImage1}></img>
                </Col>
                <Col md="4">
                <img src={PictureImage1}></img>
                </Col>

               </Row>
               <br></br><br></br>
               <h2>Download Environments</h2>
               <Row>
                <Col md="3">
                <img src={MicroGravityImage}></img>
                <h6>Microgravity</h6>
                </Col>
                <Col md="3">
                <img src={MoonImage}></img>
                <h6>Moon</h6>
                </Col>
                <Col md="3">
                <img src={MarsImage}></img>
                <h6>Mars</h6>
                </Col>
                <Col md="3">
                <img src={AsteroidImage}></img>
                <h6>Asteroid</h6>
                </Col>
               </Row>

               <br></br><br></br>
               <h2>Terrestrial</h2>
               <Row>
                <Col md="3">
                <img src={WaterImage}></img>
                <h6>Water</h6>
                </Col>
                <Col md="3">
                <img src={IceCapsImage}></img>
                <h6>Ice Caps</h6>
                </Col>
                <Col md="3">
                <img src={TerrainImage}></img>
                <h6>Terrain</h6>
                </Col>
                <Col md="3">
                <img src={IndustryImage}></img>
                <h6>Industry</h6>
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

export default Download
