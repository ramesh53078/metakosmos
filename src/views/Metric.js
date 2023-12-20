/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useEffect,useRef} from "react";
import { Link } from 'react-router-dom';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

import SuitTagImage from 'assets/img/Suit-Tile-Logo.gif';
import HeartImage from 'assets/img/Human-Tile-Logo.gif';
import EnvironmentImage from 'assets/img/Environment-Tile-Logo.gif';
import SessionImage from 'assets/img/SessionImage.png'


// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,Table, Button,Modal,
  ModalHeader,FormGroup,Form,Input, ModalBody, ModalFooter } from "reactstrap";

function Metric() {
  const inputRef = useRef();
  useEffect(() => {
    // Initialize DataTables
    $(document).ready(function () {
      $('#human_metrics').DataTable();
    });
  }, []);

  const [modalSearch, setmodalSearch] = React.useState(false);
  const [modalSession ,setmodalSession] = React.useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleModalSeession();
    } else if (e.key === 'Escape') {
      // Handle Escape key press (you can add your logic here)
      console.log('Escape key pressed');
    }
  };

  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };

  const toggleModalSeession = () => {
    setmodalSession(!modalSession);
  };

  const handleModalOpen = () => {
    const modalContentDiv = document.querySelector('.modal-content');
    if (modalContentDiv) {
      modalContentDiv.classList.add('card');
    }
  };


  return (
    <>
     <div style={{width:'75%',marginTop:'10px'}}>
                <Row className="">
                  <Col md="4">
                    <Table>
                      <thead>
                        <tr>
                  <th>Date: {new Date().toLocaleDateString()}</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                  <Col md="4">
                  <Table>
                      <thead>
                        <tr>
                  <th>Suit ID : KS 001</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                  <Col md="4">
                  <Table>
                      <thead>
                        <tr>
                  <th>Session ID : KS 001 aced1567</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                </Row>
                {/* starts second row */}
                <Row className="">
                  <Col md="4">
                    <Table>
                      <thead>
                        <tr>
                  <th>Name : John Doe</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                  <Col md="2">
                  <Table>
                      <thead>
                        <tr>
                  <th>Age: 26</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                  <Col md="2">
                  <Table>
                      <thead>
                        <tr>
                  <th>Gender : Male</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                  <Col md="2">
                  <Table>
                      <thead>
                        <tr>
                  <th>Ethnicity : Asian</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                  <Col md="2">
                  <Table>
                      <thead>
                        <tr>
                  <th>Stage : Preflight</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                </Row>

                <Row className="">
                  <Col md="4">
                  <Table>
                      <thead>
                        <tr>
                  <th>Vessel: NASA</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                  <Col md="4">
                  <Table>
                      <thead>
                        <tr>
                  <th>Location: GPS Enabled</th>
                  </tr>
                  </thead>
                  </Table>
                  </Col>
                </Row>
                </div>
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
                    lg="4"
                    md="4"
                    sm="4"
                  >
                    
                    <div className="font-icon-detail">
                      <Row >
                        <Col 
                          lg="4" 
                          md="4" 
                          sm="4"
                          >
                          <div className="top-left">
                          <img src={SuitTagImage} width='80' height='auto' ></img>
                          </div>
                          </Col>
                          <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                           
                          <div className="top-right">
                          <Button className="metric_button">Sync</Button>
                            <Button className="metric_button">Manual</Button>
                          </div>
                          </Col>

                      </Row>
                      <div style={{ height: '50vh', overflowY: 'auto' }}>
                      <Table className="tablesorter">
                  
                        <thead className="bg-warning">
                            <th>Layer 1 - Sensorsuit</th>
                            <th>Metric/Unit</th>
                        </thead>
                        <tbody>
                        
                        <tr>
                          <td>Hydraulic Resistance</td>
                          <td>5 kPa</td>
                        </tr>
                        <tr>
                          <td>Water Flow Rate</td>
                          <td>100 Liters/Hour</td>
                        </tr>
                        <tr>
                          <td>Compression Pressure</td>
                          <td>2 Psi</td>
                        </tr>
                        <tr>
                          <td>Thermal Conductivity</td>
                          <td>BTU/(h⋅ft⋅°F)</td>
                        </tr>
                        <tr>
                          <td>Mass Flow Rate</td>
                          <td>P/sec</td>
                        </tr>
                        <tr>
                          <td>Heat Transfer Rate</td>
                          <td>Watt</td>
                        </tr>
                        <tr>
                          <td>Fabric Properties - Weight</td>
                          <td>Grams/Cm2</td>
                        </tr>
                        <tr>
                          <td>Tensile Break Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>Tear Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>Peel Adhesion</td>
                          <td>lbs</td>
                        </tr>
                        <tr>
                          <td>Air Permeability</td>
                          <td>Psi</td>
                        </tr>
                        <tr>
                          <td>Flame Resistance (Vertical) - Burn Time</td>
                          <td>Seconds</td>
                        </tr>
                        <tr>
                          <td>Flame Resistance (Vertical) - Char Length</td>
                          <td>Inches</td>
                        </tr>
                        <tr>
                          <td>Density</td>
                          <td>kg/mm3</td>
                        </tr>
                        <tr>
                          <td>Youngs Modulus</td>
                          <td>MPA</td>
                        </tr>
                        <tr>
                          <td>Liquid Properties - Temperature</td>
                          <td>4°C</td>
                        </tr>
                        </tbody>
                        <thead className="bg-warning">
                          <th>
                           Layer 2 - Bladder
                          </th>
                          <th></th>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Suit Pressure Leaks</td>
                          <td>scc/m</td>
                        </tr>
                        <tr>
                          <td>Pressure</td>
                          <td>Psi</td>
                        </tr>
                        <tr>
                          <td>Fabric Properties - Weight</td>
                          <td>Grams/Cm2</td>
                        </tr>
                        <tr>
                          <td>Tensile Break Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>Tear Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>Peel Adhesion</td>
                          <td>lbs</td>
                        </tr>
                        <tr>
                          <td>Air Permeability</td>
                          <td>Psi</td>
                        </tr>
                        <tr>
                          <td>Flame Resistance (Vertical) - Burn Time</td>
                          <td>Seconds</td>
                        </tr>
                        <tr>
                          <td>Flame Resistance (Vertical) - Char Length</td>
                          <td>Inches</td>
                        </tr>
                        <tr>
                          <td>Density</td>
                          <td>kg/mm3</td>
                        </tr>
                        <tr>
                          <td>Youngs Modulus</td>
                          <td>MPA</td>
                        </tr>
                        </tbody>
                        <thead className="bg-warning">
                          <th>
                          Layer 3 - Exoskeleton
                          </th>
                          <th></th>
                        </thead>
                        <tbody>
                        </tbody>
                        <tbody>
                        <tr>
                          <td>Shoulder Torque</td>
                          <td>Nm</td>
                        </tr>
                        <tr>
                          <td>Elbow Torque</td>
                          <td>Nm</td>
                        </tr>
                        <tr>
                          <td>Knee Torque</td>
                          <td>Nm</td>
                        </tr>
                        <tr>
                          <td>Ankle Torque</td>
                          <td>Nm</td>
                        </tr>
                        </tbody>

                        <thead className="bg-warning">
                          <th>
                          Layer 4 - Exosuit 
                          </th>
                          <th></th>
                        </thead>
                        <tbody>
                        </tbody>
                        <tbody>
                        <tr>
                          <td>Suit Heat Leaks</td>
                          <td>Watts/m</td>
                        </tr>
                        <tr>
                          <td>Suit Pressure Leaks</td>
                          <td>scc/m</td>
                        </tr>
                        <tr>
                          <td>Reflectivity/Emmisivity</td>
                          <td>W⋅nm−1</td>
                        </tr>
                        <tr>
                          <td>Penetration / Ballistic</td>
                          <td>(Add specific units)</td>
                        </tr>
                        <tr>
                          <td>Fabric Properties - Weight</td>
                          <td>Grams/Cm2</td>
                        </tr>
                        <tr>
                          <td>Tensile Break Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>Tear Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>Peel Adhesion</td>
                          <td>lbs</td>
                        </tr>
                        <tr>
                          <td>Air Permeability</td>
                          <td>Psi</td>
                        </tr>
                        <tr>
                          <td>Flame Resistance (Vertical) - Burn Time</td>
                          <td>Seconds</td>
                        </tr>
                        <tr>
                          <td>Flame Resistance (Vertical) - Char Length</td>
                          <td>Inches</td>
                        </tr>
                        <tr>
                          <td>Density</td>
                          <td>kg/mm3</td>
                        </tr>
                        <tr>
                          <td>Youngs Modulus</td>
                          <td>MPA</td>
                        </tr>
                        </tbody>

                        
                        <thead className="bg-warning">
                          <th>
                          Gloves
                          </th>
                          <th></th>
                        </thead>
                        <tbody>
                        </tbody>
                        <tbody>
                        <tr>
                          <td>Sensitivity</td>
                          <td>N/m2</td>
                        </tr>
                        <tr>
                          <td>Finger Tactility</td>
                          <td>◦</td>
                        </tr>
                        <tr>
                          <td>Grip Test</td>
                          <td>Kgs</td>
                        </tr>
                        </tbody>

                        <thead className="bg-warning">
                          <th>
                          Helmet
                          </th>
                          <th></th>
                        </thead>
                        <tbody>
                        </tbody>
                        <tbody>
                        <tr>
                          <td>Visibility</td>
                          <td>Lumen</td>
                        </tr>
                        <tr>
                          <td>Humidity</td>
                          <td>%</td>
                        </tr>
                        <tr>
                          <td>Video</td>
                          <td>MP4</td>
                        </tr>
                        </tbody>

                        <thead className="bg-warning">
                          <th>
                          Boots
                          </th>
                          <th></th>
                        </thead>
                        <tbody>
                        </tbody>
                        <tbody>
                        <tr>
                          <td>Temperature</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Stability / Grip</td>
                          <td></td>
                        </tr>
                        </tbody>

                        <thead className="bg-warning">
                          <th>
                          Life Support
                          </th>
                          <th></th>
                        </thead>
                        <tbody>
                        </tbody>
                        <tbody>
                        <tr>
                          <td>Temperature</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Stability / Grip</td>
                          <td></td>
                        </tr>
                        </tbody>

                        <thead className="bg-warning">
                        <th>Life Support</th>
                        <th></th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Oxygen</td>
                          <td>10 MPa</td>
                        </tr>
                        <tr>
                          <td>Water</td>
                          <td>5 Liters</td>
                        </tr>
                        <tr>
                          <td>Oxygen - 2</td>
                          <td>10 MPa</td>
                        </tr>
                        <tr>
                          <td>Water - 2</td>
                          <td>2.5 Liters</td>
                        </tr>
                      </tbody>

                        {/* sub clusters */}
                      <thead>
                        <th className="bg-light">HVAC System</th>
                        <th className="bg-light"></th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Chiller</td>
                          <td>Green</td>
                        </tr>
                        <tr>
                          <td>Water Flow</td>
                          <td>LPM</td>
                        </tr>
                      </tbody>

                        {/* cluster  */}
                      <thead className="bg-warning">
                        <th>Power</th>
                        <th></th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Battery Cells</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>Capacity</td>
                          <td>390 Watt/Hrs</td>
                        </tr>
                        <tr>
                          <td>State of Charge (SOC)</td>
                          <td>%</td>
                        </tr>
                        <tr>
                          <td>State of Health (SOH)</td>
                          <td>%</td>
                        </tr>
                      </tbody>

                      <thead className="bg-warning">
                        <th>Avionics</th>
                        <th></th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Sensors</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Cables</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Electromechanical Components</td>
                          <td></td>
                        </tr>
                      </tbody>


                      <thead className="bg-warning">
                        <th>Suit Configuration</th>
                        <th></th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Suit Operating Pressure</td>
                          <td>21KPA</td>
                        </tr>
                        <tr>
                          <td>Suit Weight</td>
                          <td>40Kg</td>
                        </tr>
                        <tr>
                          <td>Mechanical Tools Inventory</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Position & Tracking</td>
                          <td></td>
                        </tr>
                      </tbody>

                      <thead className="bg-warning">
                        <th>Suit Biomechanics</th>
                        <th></th>
                      </thead>
                      <thead>
                       <th className="bg-light">Postural Stability</th>
                       <th className="bg-light">0.95</th>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Dynamic Postural Stability Index (PSI)</td>
                        <td>0.95</td>
                      </tr>
                      <tr>
                        <td>Variability of Ground Reaction Forces (GRF)</td>
                        <td>CV/SD</td>
                      </tr>
                      <tr>
                        <td>Limits of Stability</td>
                        <td>Cms</td>
                      </tr>
                      <tr>
                        <td>Center of Pressure (COP) length & excursion</td>
                        <td>Cms</td>
                      </tr>
                      </tbody>

                      <thead>
                        <th className="bg-light">Spatiotemporal</th>
                        <th className="bg-light"></th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Speed</td>
                          <td>m/s</td>
                        </tr>
                        <tr>
                          <td>Stride Rate</td>
                          <td>Hz</td>
                        </tr>
                        <tr>
                          <td>Stride Length</td>
                          <td>m</td>
                        </tr>
                        <tr>
                          <td>Duration of Stance, Loading, Propulsion</td>
                          <td>s/%</td>
                        </tr>
                        <tr>
                          <td>Step Width</td>
                          <td>m</td>
                        </tr>
                      </tbody>

                      <thead>
                        <th className="bg-light">Kinetics - Ground Reaction Forces</th>
                        <th className="bg-light"></th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Peak vertical & anterior/posterior GRF</td>
                          <td>N</td>
                        </tr>
                        <tr>
                          <td>Peak Medio-lateral GRF</td>
                          <td>N</td>
                        </tr>
                        <tr>
                          <td>Minimum vertical GRF</td>
                          <td>N</td>
                        </tr>
                        <tr>
                          <td>Loading & Propulsion rates</td>
                          <td>N/s</td>
                        </tr>
                        <tr>
                          <td>Joint Movements</td>
                          <td>N/m</td>
                        </tr>
                      </tbody>

                        <thead>
                          <th className="bg-light">Kinetics - Insole Forces</th>
                          <th className="bg-light"></th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Peak Normal Force (PNF)</td>
                            <td>N</td>
                          </tr>
                          <tr>
                            <td>Minimal normal force (MNF)</td>
                            <td>N</td>
                          </tr>
                          <tr>
                            <td>PNF at rearfoot, midfoot and forefoot</td>
                            <td>N</td>
                          </tr>
                        </tbody>

                        <thead>
                          <th className="bg-light">Kinetics - Exosuit</th>
                          <th className="bg-light"></th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Measured Torque</td>
                            <td>Nm</td>
                          </tr>
                          <tr>
                            <td>Force applied by exosuit layers</td>
                            <td>N</td>
                          </tr>
                        </tbody>

                          <thead>
                            <th className="bg-light">Kinematics - Exosuit</th>
                            <th className="bg-light"></th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Peak Joint Angles (max & min)</td>
                              <td>◦Degrees</td>
                            </tr>
                            <tr>
                              <td>Range of Motion</td>
                              <td>◦Degrees</td>
                            </tr>
                          </tbody>

                          <thead>
                            <th className="bg-light">INJURY PROTECTION</th>
                            <th className="bg-light"></th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Kinematics-Peak Joint Angles (max & min)</td>
                              <td>◦</td>
                            </tr>
                            <tr>
                              <td>Kinematics - Range of Motion</td>
                              <td>◦</td>
                            </tr>
                            <tr>
                              <td>Force applied /measured by devices</td>
                              <td>N</td>
                            </tr>
                            <tr>
                              <td>Torque measured by devices</td>
                              <td>Nm</td>
                            </tr>
                            <tr>
                              <td>Internal joint moments</td>
                              <td>Nm</td>
                            </tr>
                            <tr>
                              <td>Muscle forces</td>
                              <td>N/Kg</td>
                            </tr>
                          </tbody>

                          <thead className="bg-warning">
                            <th>Suit Positioning</th>
                            <th></th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>GPS</td>
                              <td>NMEA string</td>
                            </tr>
                            <tr>
                              <td>NAVIC</td>
                              <td>String</td>
                            </tr>
                          </tbody>

                          <thead className="bg-warning">
                            <th>Suit Motion Capture</th>
                            <th></th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>IMU - 1</td>
                              <td>m/s2</td>
                            </tr>
                            <tr>
                              <td>IMU - 2</td>
                              <td>m/s2</td>
                            </tr>
                            <tr>
                              <td>IMU - 3</td>
                              <td>m/s2</td>
                            </tr>
                          </tbody>
                        
                      </Table>
                      </div>
                      <Button><Link to="/admin/human-metric">Table View</Link></Button>
                      <Button onClick={toggleModalSearch}>Add Metric</Button>
                      
                    </div>
                    
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="4"
                    md="4"
                    sm="4"
                  >
                    
                        <div className="font-icon-detail">
                      <Row >
                        <Col 
                          lg="4" 
                          md="4" 
                          sm="4"
                          >
                          <div className="top-left">
                          <img src={HeartImage} width='80' height='auto' ></img>
                          </div>
                          </Col>
                          <Col 
                          lg="6" 
                          md="6" 
                          sm="6"
                          >
                             <Row>
                              <Col md="4">
                              <Button className="metric_button" style={{whiteSpace:'nowrap'}}>Lab Sync</Button>
                              </Col>
                              <Col md="3"></Col>
                              <Col md="3">
                              <Button className="metric_button">Manual</Button>
                              </Col>
                            </Row>
                          {/* <div className="top-right">
                          <Button className="metric_button">Lab Sync</Button>
                            <Button className="metric_button">Manual</Button>
                          </div> */}
                          </Col>

                      </Row>
                      <div style={{ height: '50vh', overflowY: 'auto' }}> 
                      <Table className="tablesorter">
                  
                        <thead className="bg-warning">
                          <th>Lab Name</th>
                          <th></th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1. Laboratory - 01 Routine Biochemistry</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>2. Laboratory - 02 Special Biochemistry</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>3. Laboratory - 03 Immunoassays</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>4. Laboratory - 04 Coagulation, ELISA & Autoimmunity</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>5. Laboratory - Clinical Pathology</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>6. Laboratory - Cytology</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>7. Laboratory - Histopathology</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>8. Laboratory - Microbiology & Serology</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>9. 2D-Echo</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>10. X-Ray</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>11. Dopplers</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>12. Endoscopy</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>13. TMT</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>14. Ultrasound</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>15. Radiology</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>16. ECG</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>17. Fitness Assessment & Biomechanics</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>18. DNA</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>19. Nutritional</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>20. Hearing & Vision</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>21. Respiratory</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>22. Cardiovascular</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>23. Vaccination</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>24. Radiation</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>25. Bone Density</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>26. Muscle Mapping</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>27. Fertility</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>28. Cognitive</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>29. Public Health Records (Google Cancer Genome Atlas)</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </Table>
                      </div>
                      <Button><Link to="/admin/medical-metric">Table View</Link></Button>
                      <Button onClick={toggleModalSearch} >Add Metric</Button>
                    </div>
                    
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="4"
                    md="4"
                    sm="4"
                  >
                    
                        <div className="font-icon-detail">
                      <Row >
                        <Col 
                          lg="4" 
                          md="4" 
                          sm="4"
                          >
                          <div className="top-left">
                          <img src={EnvironmentImage} width='80' height='auto' ></img>
                          </div>
                          </Col>
                          <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          <div className="top-right">
                          <Button className="metric_button">Sync</Button>
                            <Button className="metric_button">Manual</Button>
                          </div>
                          </Col>

                      </Row>
                      <div style={{ height: '50vh', overflowY: 'auto' }}>
                      <Table className="tablesorter">
                        <thead className="bg-warning">
                          <th>Earth Metrics/Units</th>
                          <th></th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Surface Radiation</td>
                            <td>342 w/m2</td>
                          </tr>
                          <tr>
                            <td>Gravity</td>
                            <td>9.807 m/s²</td>
                          </tr>
                          <tr>
                            <td>Atmospheric Gases</td>
                            <td>78% N2</td>
                          </tr>
                          <tr>
                            <td>Wind Speed</td>
                            <td>12 Km/Hour</td>
                          </tr>
                          <tr>
                            <td>Mean Temperature</td>
                            <td>15 °C</td>
                          </tr>
                          <tr>
                            <td>Surface Pressure</td>
                            <td>1 Bar</td>
                          </tr>
                          <tr>
                            <td>Length of Day</td>
                            <td>24 Hours</td>
                          </tr>
                          <tr>
                            <td>Water Depth</td>
                            <td>100 Meters</td>
                          </tr>
                        </tbody>

                          <thead className="bg-warning">
                            <th>Moon Metrics/Units</th>
                            <th></th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Surface Radiation</td>
                              <td>60 mSv/hr</td>
                            </tr>
                            <tr>
                              <td>Gravity</td>
                              <td>1.6 m/s²</td>
                            </tr>
                            <tr>
                              <td>Atmospheric Gases</td>
                              <td>33% Helium</td>
                            </tr>
                            <tr>
                              <td>Wind Speed</td>
                              <td>0 Km/Hour</td>
                            </tr>
                            <tr>
                              <td>Mean Temperature</td>
                              <td>-20°C</td>
                            </tr>
                            <tr>
                              <td>Surface Pressure</td>
                              <td>0 Bar</td>
                            </tr>
                            <tr>
                              <td>Length of Day</td>
                              <td>708.7 Hours</td>
                            </tr>
                          </tbody>

                            <thead className="bg-warning">
                              <th>Mars Metrics/Units</th>
                              <th></th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Surface Radiation</td>
                                <td>300 mSv/year</td>
                              </tr>
                              <tr>
                                <td>Gravity</td>
                                <td>3.7 m/s²</td>
                              </tr>
                              <tr>
                                <td>Atmospheric Gases</td>
                                <td>95% CO2</td>
                              </tr>
                              <tr>
                                <td>Wind Speed</td>
                                <td>20 Km/Hour</td>
                              </tr>
                              <tr>
                                <td>Mean Temperature</td>
                                <td>-65°C</td>
                              </tr>
                              <tr>
                                <td>Surface Pressure</td>
                                <td>0.01 Bar</td>
                              </tr>
                              <tr>
                                <td>Length of Day</td>
                                <td>24.6 Hours</td>
                              </tr>
                            </tbody>

                              <thead className="bg-warning">
                                <th>Mercury Metrics/Units</th>
                                <th></th>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Surface Radiation</td>
                                  <td>msv/year</td>
                                </tr>
                                <tr>
                                  <td>Gravity</td>
                                  <td>m/s²</td>
                                </tr>
                                <tr>
                                  <td>Atmospheric Gases</td>
                                  <td>CO2</td>
                                </tr>
                                <tr>
                                  <td>Wind Speed</td>
                                  <td>Km/Hour</td>
                                </tr>
                                <tr>
                                  <td>Mean Temperature</td>
                                  <td>-°C</td>
                                </tr>
                                <tr>
                                  <td>Surface Pressure</td>
                                  <td>Bar</td>
                                </tr>
                                <tr>
                                  <td>Length of Day</td>
                                  <td>Hours</td>
                                </tr>
                                
                              </tbody>
                      </Table>
                      </div>
                      <Button><Link to="/admin/environment-metric">Table View</Link></Button>
                      <Button onClick={toggleModalSearch}>Add Metric</Button>
                    </div>
                    
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

      <Modal
        modalClassName="modal"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
        onOpened={handleModalOpen}
      >
        <ModalHeader> 
        <ModalBody>
        <Row>
          <Col md="12">
            {/* <Card>
              <CardHeader> */}
                <h5 className="title">Human Metrics</h5>
              {/* </CardHeader> */}
              {/* <CardBody className="all-icons"> */}
                {/* <Card > */}
                    {/* <CardHeader> */}
                        <h1>New Human Metric</h1>
                    {/* </CardHeader> */}
                    {/* <CardBody> */}
                    <Form>
                  <Row>
                    <Col className="px-md-1" md="12">
                      <FormGroup>
                        <label>Metric Name</label>
                        <Input
                        //   defaultValue="michael23"
                          placeholder="Metric Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="12">
                      <FormGroup>
                      <label>Metric Name</label>
                        <Input
                        //   defaultValue="michael23"
                          placeholder="Metric Code"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-md-1" md="12">
                      <FormGroup>
                        <label>Data Extraction</label>
                        <Input
                        //   defaultValue="Mike"
                          placeholder="Data Extraction"
                          onKeyDown={handleKeyDown}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="12">
                      <FormGroup>
                        <label>Unit Measurment</label>
                        <Input
                        //   defaultValue="Andrew"
                          placeholder="Unit Measurment"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-md-1" md="12">
                      <FormGroup>
                        <label>Metric Range</label>
                        <Input
                          placeholder="Metric range"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-md-1" md="12">
                      <FormGroup>
                        <label>Frequency</label>
                        <Input
                          placeholder="Frequency"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="12">
                      <FormGroup>
                      <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile01">Upload</label>
                        <input type="file" class="form-control" id="inputGroupFile01"></input>
                        <div style={{marginTop:"20px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                      </svg>
                        </div>
                      </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="px-md-1" md="4">
                      <FormGroup>
                        
                        <Input
                          placeholder="Frequency"
                          style={{backgroundColor:"#2b3553",borderColor:'none'}}
                          type="button" value="Cancel"
                          onClick={toggleModalSearch}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <Input
                          placeholder="Frequency"
                          onClick={toggleModalSeession}
                          style={{backgroundColor:"#2b3553",borderColor:'none'}}
                          type="button" value="Submit"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
                
                    {/* </CardBody>
                </Card>
              </CardBody>
            </Card> */}
          </Col>
        </Row>
        </ModalBody>
      
      
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
        
      </Modal>

      <Modal
      style={{left:'30%',backgroundColor:'rgba(231,229,230,255)'}}
        modalClassName="modal"
        isOpen={modalSession}
        toggle={toggleModalSeession}
        onOpened={handleModalOpen}
      >
        <ModalHeader> 
        <ModalBody>
        <Row>
          <Col md="12">
          {/* <img src={SessionImage} width='100%' height='110%' style={{marginTop:'-10%',marginLeft:'-12%'}} ></img> */}
          <h1>Temperature Sensor Specifications</h1>
  <table>
    <tr>
      <th>Sensor ID</th>
      <td>12345</td>
    </tr>
    <tr>
      <th>Device Data</th>
      <td>
        <table>
          <tr>
            <th>Sensor Type</th>
            <td>Temperature</td>
          </tr>
          <tr>
            <th>Manufacturer</th>
            <td>Siemens</td>
          </tr>
          <tr>
            <th>Model Number</th>
            <td>Siemens-100</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <th>Physical Dimensions</th>
      <td>10x10x2 mms</td>
    </tr>
    <tr>
      <th>Characteristics</th>
      <td>
        <table>
          <tr>
            <th>Weight</th>
            <td>200 grams</td>
          </tr>
          <tr>
            <th>Range</th>
            <td>(-20 to 100°C)</td>
          </tr>
          <tr>
            <th>Resolution</th>
            <td>(0.1°C)</td>
          </tr>
          <tr>
            <th>Accuracy</th>
            <td>(±0.5°C)</td>
          </tr>
          <tr>
            <th>Sampling Rate</th>
            <td>1 Hz</td>
          </tr>
          <tr>
            <th>Voltage</th>
            <td>5V</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <th>Power</th>
      <td>
        <table>
          <tr>
            <th>Current</th>
            <td>50mAmp</td>
          </tr>
          <tr>
            <th>Power Consumption</th>
            <td>0.25 W</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <th>Communication</th>
      <td>
        <table>
          <tr>
            <th>Comm Protocol</th>
            <td>MQTT</td>
          </tr>
          <tr>
            <th>Data Output Format</th>
            <td>JSON</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <th>Operating Conditions</th>
      <td>
        <table>
          <tr>
            <th>Temp Range</th>
            <td>(-30°C to 70°C)</td>
          </tr>
          <tr>
            <th>Humidity Range</th>
            <td>(0% to 95%)</td>
          </tr>
          <tr>
            <th>Calibration Interval</th>
            <td>6 Months</td>
          </tr>
          <tr>
            <th>Calibration Procedure</th>
            <td>ISO 17025 compliant</td>
          </tr>
          <tr>
            <th>Metadata Timestamp</th>
            <td>2023-11-16T12:00:00Z</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
          </Col>
        </Row>
        </ModalBody>
      
      
          {/* <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSeession}
          >
            <i className="tim-icons icon-simple-remove" />
          </button> */}
        </ModalHeader>
        
      </Modal>
    </>
  );
}

export default Metric;