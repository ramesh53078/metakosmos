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
import { backgroundColors } from 'contexts/BackgroundColorContext';
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
              <Row className='justify-content-center'>
                <Col md="4" style={{ backgroundColor: '#fff', textAlign: 'center', marginRight: '10px', marginBottom: '10px' }}>
                  <button style={{ padding: '16px 120px', margin: '7px 0', border: '1px solid #000', borderRadius: '10px', whiteSpace: 'nowrap' }}>
                  <i class="fa fa-check" style={{color:'green',fontSize:'30px'}} aria-hidden="true"></i> I agree and start the download
                  </button>
                </Col>
                <Col md="4" style={{ backgroundColor: '#fff', textAlign: 'center', marginBottom: '10px' }}>
                  <button style={{ padding: '16px 110px', margin: '7px 0', border: '1px solid #000', borderRadius: '10px', whiteSpace: 'nowrap',color:'green' }}>
                  <i class="fa fa-check" style={{color:'green',fontSize:'30px'}} aria-hidden="true"></i>     Upgrade Software to latest version
                  </button>
                </Col>
              </Row>

               <br></br><br></br>
               <h2 style={{color:'#b37032'}}>Download Environments</h2>
               <Row>
                <Col md="3">
                <img src={MicroGravityImage}></img>
                <h3>Microgravity</h3>
                </Col>
                <Col md="3">
                <img src={MoonImage}></img>
                <h3>Moon</h3>
                </Col>
                <Col md="3">
                <img src={MarsImage}></img>
                <h3>Mars</h3>
                </Col>
                <Col md="3">
                <img src={AsteroidImage}></img>
                <h3>Asteroid</h3>
                </Col>
               </Row>

               <br></br><br></br>
               <h2 style={{color:'#b37032'}}>Terrestrial</h2>
               <Row>
                <Col md="3">
                <img src={WaterImage}></img>
                <h3>Water</h3>
                </Col>
                <Col md="3">
                <img src={IceCapsImage}></img>
                <h3>Ice Caps</h3>
                </Col>
                <Col md="3">
                <img src={TerrainImage}></img>
                <h3>Terrain</h3>
                </Col>
                <Col md="3">
                <img src={IndustryImage}></img>
                <h3>Industry</h3>
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
