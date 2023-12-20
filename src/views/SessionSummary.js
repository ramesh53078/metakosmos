import React from 'react';

import PictureImage1 from 'assets/img/sessionsummary/Picture1.gif';
import PictureImage2 from 'assets/img/sessionsummary/Picture2.gif';

import { Card, CardHeader, CardBody, Row, Col,CardImg,CardText, CardTitle, Table,Button,Label,FormGroup,Input } from "reactstrap";

function SessionSummary() {
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
                    lg="4"
                    md="4"
                    sm="4"
                  >
                    
                    <div className="font-icon-detail" style={{backgroundColor:'#14181b'}}>
                      <Row >
                        <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          <h2>Session Data Available</h2>
                          <h4>Would you like to load session data?</h4>
                          </Col>
                      </Row>
                      <Table className="tablesorter" style={{textAlign:'justify'}}>
                  
                        <thead>
                           <tr>
                           <th>
                              <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                             </FormGroup>
                          </th>
                            <th>Session</th>
                            <th>Date</th>
                           </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                             </FormGroup>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>06/10/2023</td>
                          </tr>

                          <tr>
                            <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                             </FormGroup>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>06/10/2023</td>
                          </tr>

                          <tr>
                            <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                             </FormGroup>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>06/10/2023</td>
                          </tr>
                        </tbody>
                      </Table>

                      <Button className='btn-lg' style={{ backgroundColor: '#10202b!important' }}>LOAD DATA</Button>
                      
                    </div>
                    
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="4"
                    md="4"
                    sm="4"
                  >
                    
                        <div className="font-icon-detail" style={{backgroundColor:'#14181b'}}>
                        <Row >
                        <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          <h2>Session Data Available</h2>
                          <h4>Would you like to load session data?</h4>
                          </Col>
                      </Row>
                     
                      <Table className="tablesorter" style={{textAlign:'justify'}}>
                  
                        <thead>
                           <tr>
                           <th>
                              <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                             </FormGroup>
                          </th>
                            <th>Session</th>
                            <th>Date</th>
                           </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                             </FormGroup>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>06/10/2023</td>
                          </tr>

                          <tr>
                            <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                             </FormGroup>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>06/10/2023</td>
                          </tr>

                          <tr>
                            <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                             </FormGroup>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>06/10/2023</td>
                          </tr>
                        </tbody>
                      </Table>
                      <Button className='btn-lg' style={{ backgroundColor: '#10202b!important' }}>EXPORT DATA</Button>
                    </div>
                    
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="4"
                    md="4"
                    sm="4"
                  >
                        <div className="font-icon-detail" style={{backgroundColor:'#14181b'}}>
                        <Row >
                        <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          <h2>Session Data Available</h2>
                          <h4>Would you like to load session data?</h4>
                          </Col>
                      </Row>
                      <Table className="tablesorter" style={{textAlign:'justify'}}>
                  
                  <thead>
                     <tr>
                     <th>
                        <FormGroup check>
                        <Label check>
                          <Input defaultValue="" type="checkbox" />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                        </Label>
                       </FormGroup>
                    </th>
                      <th>Session</th>
                      <th>Date</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      <FormGroup check>
                        <Label check>
                          <Input defaultValue="" type="checkbox" />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                        </Label>
                       </FormGroup>
                      </td>
                      <td>
                        Session 2
                      </td>
                      <td>06/10/2023</td>
                    </tr>

                    <tr>
                      <td>
                      <FormGroup check>
                        <Label check>
                          <Input defaultValue="" type="checkbox" />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                        </Label>
                       </FormGroup>
                      </td>
                      <td>
                        Session 2
                      </td>
                      <td>06/10/2023</td>
                    </tr>

                    <tr>
                      <td>
                      <FormGroup check>
                        <Label check>
                          <Input defaultValue="" type="checkbox" />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                        </Label>
                       </FormGroup>
                      </td>
                      <td>
                        Session 2
                      </td>
                      <td>06/10/2023</td>
                    </tr>
                  </tbody>
                </Table>
                <Button className='btn-lg' style={{ backgroundColor: '#10202b!important' }}>SAVE DATA</Button>
                    </div>
                    
                  </Col>
                </Row>
                <br></br>
                <br></br>
                <h2 style={{textAlign:'center'}}>VIDEO SESSION HISTORY</h2>
                <Row style={{textAlign:'center'}}>
                  <Col md="6">
                    <img src={PictureImage1}></img>
                  </Col>
                  <Col md="6">
                    <img src={PictureImage2}></img>
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

export default SessionSummary;