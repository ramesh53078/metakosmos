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
                    
                    <div className="first-session">
                      <Row >
                        <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          <h4 style={{fontSize:'20px'}}>Session Data Available</h4>
                          <h5 style={{fontSize:'13px'}}>Would you like to load session data?</h5>
                          </Col>
                      </Row>
                      <div style={{ height: '200px', overflowY: 'auto' }}>
                      <Table className="tablesorter" style={{textAlign:'justify'}}>
                  
                        <thead>
                           <tr>
                           <th>
                            <div class="round">
                              <input type="checkbox" id="checkbox" />
                              <label for="checkbox"></label>
                          </div>
                          </th>
                            <th>Session</th>
                            <th>Date</th>
                           </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox1" />
                              <label for="checkbox1"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>

                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox2" />
                              <label for="checkbox2"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>

                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox3" />
                              <label for="checkbox3"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox4" />
                              <label for="checkbox4"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr><tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox5" />
                              <label for="checkbox6"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr><tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox7" />
                              <label for="checkbox7"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                        </tbody>
                      </Table>
                      </div>

                      <Button className='session_button'>LOAD DATA</Button>
                      
                    </div>
                    
                    
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="4"
                    md="4"
                    sm="4"
                  >
                    
                        <div className="first-session">
                        <Row >
                        <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                         <h4 style={{fontSize:'20px'}}>Session Data Available</h4>
                          <h5 style={{fontSize:'13px'}}>Would you like to load session data?</h5>
                          </Col>
                      </Row>
                      <div style={{ height: '200px', overflowY: 'auto' }}>
                      <Table className="tablesorter" style={{textAlign:'justify'}}>
                  
                        <thead>
                           <tr>
                           <th>
                              <div class="round">
                              <input type="checkbox" id="checkbox8" />
                              <label for="checkbox8"></label>
                          </div>
                          </th>
                            <th>Session</th>
                            <th>Date</th>
                           </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox9" />
                              <label for="checkbox9"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>

                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox10" />
                              <label for="checkbox10"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>

                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox11" />
                              <label for="checkbox11"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox12" />
                              <label for="checkbox12"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox13" />
                              <label for="checkbox13"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox14" />
                              <label for="checkbox14"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                        </tbody>
                      </Table>
                      </div>
                      <Button className='btn-lg session_button'>EXPORT DATA</Button>
                    </div>
                    
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="4"
                    md="4"
                    sm="4"
                  >
                        <div className="first-session">
                        <Row >
                        <Col 
                          lg="8" 
                          md="8" 
                          sm="8"
                          >
                          <h4 style={{fontSize:'20px'}}>Session Data Available</h4>
                          <h5 style={{fontSize:'13px'}}>Would you like to load session data?</h5>
                          </Col>
                      </Row>
                      <div style={{ height: '200px', overflowY: 'auto' }}>
                      <Table className="tablesorter" style={{textAlign:'justify'}}>
                  
                  <thead>
                     <tr>
                     <th>
                     <div class="round">
                      <input type="checkbox" id="checkbox15" />
                      <label for="checkbox15"></label>
                      </div>
                    </th>
                      <th>Session</th>
                      <th>Date</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="round">
                        <input type="checkbox" id="checkbox16" />
                        <label for="checkbox16"></label>
                        </div>
                      </td>
                      <td>
                        Session 2
                      </td>
                      <td>{new Date().toLocaleDateString()}</td>
                    </tr>

                    <tr>
                      <td>
                        <div class="round">
                        <input type="checkbox" id="checkbox17" />
                        <label for="checkbox17"></label>
                        </div>
                      </td>
                      <td>
                        Session 2
                      </td>
                      <td>{new Date().toLocaleDateString()}</td>
                    </tr>

                    <tr>
                      <td>
                      <div class="round">
                      <input type="checkbox" id="checkbox18" />
                      <label for="checkbox18"></label>
                      </div>
                      </td>
                      <td>
                        Session 2
                      </td>
                      <td>{new Date().toLocaleDateString()}</td>
                    </tr>
                    <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox19" />
                              <label for="checkbox19"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox20" />
                              <label for="checkbox20"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                          <tr>
                            <td>
                            <div class="round">
                              <input type="checkbox" id="checkbox21" />
                              <label for="checkbox21"></label>
                          </div>
                            </td>
                            <td>
                              Session 2
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                  </tbody>
                </Table>
                </div>
                <Button className='session_button'>SAVE DATA</Button>
                    </div>
                    
                  </Col>
                </Row>
                
                <br></br>
                <h2 style={{textAlign:'center'}}>VIDEO SESSION HISTORY</h2>
                <Row style={{textAlign:'center'}}>
                  <Col md="6">
                    <img width={'60%'} height={'auto'} src={PictureImage1}></img>
                  </Col>
                  <Col md="6">
                    <img width={'60%'} height={'auto'} src={PictureImage2}></img>
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

const styles = `
.round {
  position: relative;
}

.round label {
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 4px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 6px;
  transform: rotate(-45deg);
  width: 10px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.round input[type="checkbox"]:checked + label {
  background-color: #fff; /* Keep the background color white */
  border-color: #66bb6a; /* Change the border color to green */
}

.round input[type="checkbox"]:checked + label:after {
  border-color: #66bb6a; /* Change the check mark color to green */
}
.round input[type="checkbox"]:checked + label {
  background-color: #14181b;
  border-color: #66bb6a;
}

.round input[type="checkbox"]:checked + label:after {
  border-color: #66bb6a;
}

`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);