import React from 'react';
import classNames from "classnames";
import logo from "assets/img/Kosmosuit_logo.png";
import HumanImage from "assets/img/home/human.png";
import Slider from 'react-rangeslider'
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Input,
    InputGroup,
    NavbarBrand,
    Navbar,
    NavLink,
    Nav,
    Container,
    Modal,
    NavbarToggler,
    ModalHeader,
    Row,
    Card,
    CardHeader,
    CardBody,
    Col,
    CardTitle,
    Table
} from "reactstrap";

function Home(props) {
    return (
        <div>
            <Navbar className="" expand="lg" style={{ backgroundColor: '#14181b' }}>
                <Container fluid>
                    <div className="navbar-wrapper">
                        <Nav className="ml-auto" navbar>
                            <ul>
                                <li className='separator'><a href="#"><i className='fa fa-home'></i></a></li>
                                <li><a href='#'><img src={logo} width={60} height={'auto'}></img></a></li>
                                <li><a href='#'>Digital Fit</a></li>

                            </ul>

                            <ul style={{ marginLeft: '350px' }}>
                                <li><a href='#'>Digital Fit <i className='fa fa-angle-down'></i></a></li>
                                <li><a href='#'>Digital Fit <i className='fa fa-angle-down'></i></a></li>
                                <li><a href='#'>Digital Fit <i className='fa fa-angle-down'></i></a></li>
                            </ul>
                        </Nav>
                    </div>
                </Container>
            </Navbar>

            {/* <Container className='mt-5' style={{border:'1px #043c5e solid',borderRadius:'10px'}}>
        
      </Container> */}
            <div className='container-fliud m-5' style={{ border: '2px #043c5e solid', borderRadius: '10px', width: '95%', backgroundColor: '#14181b' }}>
                <Row className=''>
                    <Col md="4" style={{ borderRight: '2px #043c5e solid' }}>
                        <Row className='mt-3 ml-3'>
                            <Col md="3">
                                <span style={{ color: '#fff', textWrap: 'nowrap' }}>Create Digital Fit</span>
                            </Col>
                            <Col md="3">
                                <span style={{ color: 'yellow', textWrap: 'nowrap' }}>Capture 3D Scan</span>
                            </Col>
                            <Col md="3">
                                <span style={{ fontSize: '12px', textWrap: 'nowrap' }}>Upload Digital Scan</span>
                            </Col>
                        </Row>
                        <Col md="8">
                            <Row className=''>
                                <Col className='m-5' md="6">
                                    <Row style={{ backgroundColor: '#1a1f25', marginRight: '-250px', borderRadius: '10px', }}>
                                        <Col md="6"><h6 className='mt-3'>Length</h6></Col>
                                        <Col md="6"><Button className='front_button'>Circumfrence</Button></Col>
                                    </Row>
                                </Col>
                                <Col className='m-5' md="6">
                                    <div style={{ height: '50vh', overflowY: 'auto', width: "250%" }}>
                                        <Table style={{ borderTop: 'none !important', textAlign: 'justify' }}>
                                            <tbody>
                                                <tr>
                                                    <td><label style={{ textWrap: 'nowrap' }}>Axillary Arm Circumference </label><input type="range" id="rangeBlue" defaultValue={133} min={0} max={255} />
                                                    </td>
                                                    <td className='mt-5'>Xmm</td>
                                                </tr>
                                                <tr>
                                                    <td><label style={{ textWrap: 'nowrap' }}>Axillary Arm Circumference </label><input type="range" id="rangeBlue" defaultValue={133} min={0} max={255} />
                                                    </td>
                                                    <td className='mt-5'>Xmm</td>
                                                </tr>
                                                <tr>
                                                    <td><label style={{ textWrap: 'nowrap' }}>Axillary Arm Circumference </label><input type="range" id="rangeBlue" defaultValue={133} min={0} max={255} />
                                                    </td>
                                                    <td className='mt-5'>Xmm</td>
                                                </tr>
                                                <tr>
                                                    <td><label style={{ textWrap: 'nowrap' }}>Axillary Arm Circumference </label><input type="range" id="rangeBlue" defaultValue={133} min={0} max={255} />
                                                    </td>
                                                    <td className='mt-5'>Xmm</td>
                                                </tr>
                                                <tr>
                                                    <td><label style={{ textWrap: 'nowrap' }}>Axillary Arm Circumference </label><input type="range" id="rangeBlue" defaultValue={133} min={0} max={255} />
                                                    </td>
                                                    <td className='mt-5'>Xmm</td>
                                                </tr>
                                                <tr>
                                                    <td><label style={{ textWrap: 'nowrap' }}>Axillary Arm Circumference </label><input type="range" id="rangeBlue" defaultValue={133} min={0} max={255} />
                                                    </td>
                                                    <td className='mt-5'>Xmm</td>
                                                </tr>
                                                <tr>
                                                    <td><label style={{ textWrap: 'nowrap' }}>Axillary Arm Circumference </label><input type="range" id="rangeBlue" defaultValue={133} min={0} max={255} />
                                                    </td>
                                                    <td className='mt-5'>Xmm</td>
                                                </tr>
                                                <tr>
                                                    <td><label style={{ textWrap: 'nowrap' }}>Axillary Arm Circumference </label><input type="range" id="rangeBlue" defaultValue={133} min={0} max={255} />
                                                    </td>
                                                    <td className='mt-5'>Xmm</td>
                                                </tr>
                                                {/* 3D Human Form that can be rotated */}

                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col md="8">
                        <img src={HumanImage} /> 
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;