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
import { useEffect } from "react";
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';


// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,CardTitle,Table } from "reactstrap";

function HumanMetric() {

  useEffect(() => {
    // Initialize DataTables
    $(document).ready(function () {
      $('#human_metrics').DataTable();
    });
  }, []);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
          <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter"  id="human_metrics">
                  <thead className="text-primary">
                    <tr>
                      <th>S.NO</th>
                      <th>Layer 1 - Sensorsuit</th>
                      <th>Metric/Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Hydraulic Resistance</td>
                    <td>5 kPa</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Water Flow Rate</td>
                    <td>100 Liters/Hour</td>
                  </tr>
                  <tr>
                  <td>3</td>
                    <td>Compression Pressure</td>
                    <td>2 Psi</td>
                  </tr>
                  <tr>
                  <td>4</td>
                    <td>Thermal Conductivity</td>
                    <td>BTU/(h⋅ft⋅°F)</td>
                  </tr>
                  <tr>
                  <td>5</td>
                    <td>Mass Flow Rate</td>
                    <td>P/sec</td>
                  </tr>
                  <tr>
                  <td>6</td>
                    <td>Heat Transfer Rate</td>
                    <td>Watt</td>
                  </tr>
                  <tr>
                  <td>7</td>
                    <td>Fabric Properties - Weight</td>
                    <td>Grams/Cm2</td>
                  </tr>
                  <tr>
                  <td>8</td>
                    <td>Tensile Break Strength</td>
                    <td>lbs/inch</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Tear Strength</td>
                    <td>lbs/inch</td>
                  </tr>
                  <tr>
                  <td>10</td>
                    <td>Peel Adhesion</td>
                    <td>lbs</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Air Permeability</td>
                    <td>Psi</td>
                  </tr>
                  <tr>
                  <td>12</td>
                    <td>Flame Resistance (Vertical) - Burn Time</td>
                    <td>Seconds</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Flame Resistance (Vertical) - Char Length</td>
                    <td>Inches</td>
                  </tr>
                  <tr>
                  <td>14</td>
                    <td>Density</td>
                    <td>kg/mm3</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Youngs Modulus</td>
                    <td>MPA</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Liquid Properties - Temperature</td>
                    <td>4°C</td>
                  </tr>
                  <tr className="bg-warning">
                    <td>17</td>
                    <td>Layer 2 - Bladder</td>
                        <td></td>
                    </tr>
                        <tr>
                          <td>18</td>
                          <td>Suit Pressure Leaks</td>
                          <td>scc/m</td>
                        </tr>
                        <tr>
                          <td>19</td>
                          <td>Pressure</td>
                          <td>Psi</td>
                        </tr>
                        <tr>
                          <td>20</td>
                          <td>Fabric Properties - Weight</td>
                          <td>Grams/Cm2</td>
                        </tr>
                        <tr>
                          <td>21</td>
                          <td>Tensile Break Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>22</td>
                          <td>Tear Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>23</td>
                          <td>Peel Adhesion</td>
                          <td>lbs</td>
                        </tr>
                        <tr>
                          <td>24</td>
                          <td>Air Permeability</td>
                          <td>Psi</td>
                        </tr>
                        <tr>
                          <td>25</td>
                          <td>Flame Resistance (Vertical) - Burn Time</td>
                          <td>Seconds</td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>Flame Resistance (Vertical) - Char Length</td>
                          <td>Inches</td>
                        </tr>
                        <tr>
                          <td>27</td>
                          <td>Density</td>
                          <td>kg/mm3</td>
                        </tr>
                        <tr>
                          <td>28</td>
                          <td>Youngs Modulus</td>
                          <td>MPA</td>
                        </tr>
                        

                        <tr className="bg-warning">
                          <td>29</td>
                          <td>Layer 3 - Exoskeleton</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>30</td>
                          <td>Shoulder Torque</td>
                          <td>Nm</td>
                        </tr>
                        <tr>
                        <td>31</td>
                          <td>Elbow Torque</td>
                          <td>Nm</td>
                        </tr>
                        <tr>
                          <td>32</td>
                          <td>Knee Torque</td>
                          <td>Nm</td>
                        </tr>
                        <tr>
                          <td>33</td>
                          <td>Ankle Torque</td>
                          <td>Nm</td>
                        </tr>
                        <tr className="bg-warning">
                          <td>34</td>
                          <td>Layer 4 - Exosuit </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>35</td>
                          <td>Suit Heat Leaks</td>
                          <td>Watts/m</td>
                        </tr>
                        <tr>
                          <td>36</td>
                          <td>Suit Pressure Leaks</td>
                          <td>scc/m</td>
                        </tr>
                        <tr>
                          <td>37</td>
                          <td>Reflectivity/Emmisivity</td>
                          <td>W⋅nm−1</td>
                        </tr>
                        <tr>
                          <td>38</td>
                          <td>Penetration / Ballistic</td>
                          <td>(Add specific units)</td>
                        </tr>
                        <tr>
                          <td>39</td>
                          <td>Fabric Properties - Weight</td>
                          <td>Grams/Cm2</td>
                        </tr>
                        <tr>
                          <td>40</td>
                          <td>Tensile Break Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>41</td>
                          <td>Tear Strength</td>
                          <td>lbs/inch</td>
                        </tr>
                        <tr>
                          <td>42</td>
                          <td>Peel Adhesion</td>
                          <td>lbs</td>
                        </tr>
                        <tr>
                          <td>43</td>
                          <td>Air Permeability</td>
                          <td>Psi</td>
                        </tr>
                        <tr>
                          <td>44</td>
                          <td>Flame Resistance (Vertical) - Burn Time</td>
                          <td>Seconds</td>
                        </tr>
                        <tr>
                          <td>45</td>
                          <td>Flame Resistance (Vertical) - Char Length</td>
                          <td>Inches</td>
                        </tr>
                        <tr>
                          <td>46</td>
                          <td>Density</td>
                          <td>kg/mm3</td>
                        </tr>
                        <tr>
                          <td>47</td>
                          <td>Youngs Modulus</td>
                          <td>MPA</td>
                        </tr>
                        <tr className="bg-warning">
                          <td>48</td>
                          <td>Gloves</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>49</td>
                          <td>Sensitivity</td>
                          <td>N/m2</td>
                        </tr>
                        <tr>
                          <td>50</td>
                          <td>Finger Tactility</td>
                          <td>◦</td>
                        </tr>
                        <tr>
                          <td>51</td>
                          <td>Grip Test</td>
                          <td>Kgs</td>
                        </tr>
                        <tr className="bg-warning">
                          <td>52</td>
                          <td>Helmet</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>53</td>
                          <td>Visibility</td>
                          <td>Lumen</td>
                        </tr>
                        <tr>
                          <td>54</td>
                          <td>Humidity</td>
                          <td>%</td>
                        </tr>
                        <tr>
                          <td>55</td>
                          <td>Video</td>
                          <td>MP4</td>
                        </tr>

                        <tr className="bg-warning">
                          <td>56</td>
                          <td>Boots</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>57</td>
                          <td>Temperature</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>58</td>
                          <td>Stability / Grip</td>
                          <td></td>
                        </tr>

                        <tr className="bg-warning">
                          <td>59</td>
                          <td>Life Support</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>60</td>
                          <td>Temperature</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>61</td>
                          <td>Stability / Grip</td>
                          <td></td>
                        </tr>
                        
                        <tr className="bg-warning">
                          <td>62</td>
                        <td>Life Support</td>
                        <td></td>
                      </tr>
                        <tr>
                          <td>63</td>
                          <td>Oxygen</td>
                          <td>10 MPa</td>
                        </tr>
                        <tr>
                          <td>64</td>
                          <td>Water</td>
                          <td>5 Liters</td>
                        </tr>
                        <tr>
                          <td>65</td>
                          <td>Oxygen - 2</td>
                          <td>10 MPa</td>
                        </tr>
                        <tr>
                          <td>66</td>
                          <td>Water - 2</td>
                          <td>2.5 Liters</td>
                        </tr>
                        <tr className="bg-light">
                        <td>67</td>
                        <td>HVAC System</td>
                        <td></td>
                      </tr>
                        <tr>
                          <td>68</td>
                          <td>Chiller</td>
                          <td>Green</td>
                        </tr>
                        <tr>
                          <td>69</td>
                          <td>Water Flow</td>
                          <td>LPM</td>
                        </tr>

                        <tr className="bg-warning">
                          <td>70</td>
                          <td>Power</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>71</td>
                          <td>Battery Cells</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>72</td>
                          <td>Capacity</td>
                          <td>390 Watt/Hrs</td>
                        </tr>
                        <tr>
                          <td>73</td>
                          <td>State of Charge (SOC)</td>
                          <td>%</td>
                        </tr>
                        <tr>
                          <td>74</td>
                          <td>State of Health (SOH)</td>
                          <td>%</td>
                        </tr>

                        <tr className="bg-warning">
                          <td>75</td>
                          <td>Avionics</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>76</td>
                          <td>Sensors</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>77</td>
                          <td>Cables</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>78</td>
                          <td>Electromechanical Components</td>
                          <td></td>
                        </tr>

                        <tr className="bg-warning">
                          <td>79</td>
                          <td>Suit Configuration</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>80</td>
                          <td>Suit Operating Pressure</td>
                          <td>21KPA</td>
                        </tr>
                        <tr>
                          <td>81</td>
                          <td>Suit Weight</td>
                          <td>40Kg</td>
                        </tr>
                        <tr>
                          <td>82</td>
                          <td>Mechanical Tools Inventory</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>83</td>
                          <td>Position & Tracking</td>
                          <td></td>
                        </tr>

                        <tr className="bg-warning">
                          <td>84</td>
                          <td>Suit Biomechanics</td>
                          <td></td>
                        </tr>
                        <tr className="bg-light">
                          <td>85</td>
                          <td>Postural Stability</td>
                          <td>0.95</td>
                        </tr>
                        <tr>
                          <td>86</td>
                          <td>Dynamic Postural Stability Index (PSI)</td>
                          <td>0.95</td>
                        </tr>
                        <tr>
                          <td>87</td>
                          <td>Variability of Ground Reaction Forces (GRF)</td>
                          <td>CV/SD</td>
                        </tr>
                        <tr>
                          <td>88</td>
                          <td>Limits of Stability</td>
                          <td>Cms</td>
                        </tr>
                        <tr>
                          <td>89</td>
                          <td>Center of Pressure (COP) length & excursion</td>
                          <td>Cms</td>
                        </tr>

                        <tr className="bg-light">
                              <td>90</td>
                            <td>Spatiotemporal</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>91</td>
                            <td>Speed</td>
                            <td>m/s</td>
                          </tr>
                          <tr>
                            <td>92</td>
                            <td>Stride Rate</td>
                            <td>Hz</td>
                          </tr>
                          <tr>
                            <td>93</td>
                            <td>Stride Length</td>
                            <td>m</td>
                          </tr>
                          <tr>
                            <td>94</td>
                            <td>Duration of Stance, Loading, Propulsion</td>
                            <td>s/%</td>
                          </tr>
                          <tr>
                            <td>95</td>
                            <td>Step Width</td>
                            <td>m</td>
                          </tr>

                          <tr className="bg-light">
                            <td>96</td>
                            <td>Kinetics - Ground Reaction Forces</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>97</td>
                            <td>Peak vertical & anterior/posterior GRF</td>
                            <td>N</td>
                          </tr>
                          <tr>
                            <td>99</td>
                            <td>Peak Medio-lateral GRF</td>
                            <td>N</td>
                          </tr>
                          <tr>
                            <td>100</td>
                            <td>Minimum vertical GRF</td>
                            <td>N</td>
                          </tr>
                          <tr>
                            <td>101</td>
                            <td>Loading & Propulsion rates</td>
                            <td>N/s</td>
                          </tr>
                          <tr>
                            <td>102</td>
                            <td>Joint Movements</td>
                            <td>N/m</td>
                          </tr>

                          <tr className="bg-light">
                            <td>103</td>
                            <td>Kinetics - Insole Forces</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>104</td>
                            <td>Peak Normal Force (PNF)</td>
                            <td>N</td>
                          </tr>
                          <tr>
                            <td>105</td>
                            <td>Minimal normal force (MNF)</td>
                            <td>N</td>
                          </tr>
                          <tr>
                            <td>106</td>
                            <td>PNF at rearfoot, midfoot and forefoot</td>
                            <td>N</td>
                          </tr>

                          <tr className="bg-light">
                            <td>107</td>
                            <td>Kinetics - Exosuit</td>
                            <td></td>
                          </tr>
                          <tr>
                          <td>108</td>
                            <td>Measured Torque</td>
                            <td>Nm</td>
                          </tr>
                          <tr>
                          <td>109</td>
                            <td>Force applied by exosuit layers</td>
                            <td>N</td>
                          </tr>

                          <tr className="bg-light">
                          <td>110</td>
                            <td>Kinematics - Exosuit</td>
                            <td></td>
                          </tr>
                          <tr>
                          <td>111</td>
                            <td>Peak Joint Angles (max & min)</td>
                            <td>◦Degrees</td>
                          </tr>
                          <tr>
                          <td>112</td>
                            <td>Range of Motion</td>
                            <td>◦Degrees</td>
                          </tr>

                          <tr className="bg-light">
                          <td>113</td>
                            <td>INJURY PROTECTION</td>
                            <td></td>
                          </tr>
                          <tr>
                          <td>114</td>
                            <td>Kinematics-Peak Joint Angles (max & min)</td>
                            <td>◦</td>
                          </tr>
                          <tr>
                          <td>115</td>
                            <td>Kinematics - Range of Motion</td>
                            <td>◦</td>
                          </tr>
                          <tr>
                          <td>116</td>
                            <td>Force applied /measured by devices</td>
                            <td>N</td>
                          </tr>
                          <tr>
                          <td>117</td>
                            <td>Torque measured by devices</td>
                            <td>Nm</td>
                          </tr>
                          <tr>
                          <td>118</td>
                            <td>Internal joint moments</td>
                            <td>Nm</td>
                          </tr>
                          <tr>
                          <td>119</td>
                            <td>Muscle forces</td>
                            <td>N/Kg</td>
                          </tr>

                          <tr className="bg-warning">
                          <td>120</td>
                            <td>Suit Positioning</td>
                            <td></td>
                          </tr>
                          <tr>
                          <td>121</td>
                            <td>GPS</td>
                            <td>NMEA string</td>
                          </tr>
                          <tr>
                          <td>122</td>
                            <td>NAVIC</td>
                            <td>String</td>
                          </tr>

                          <tr className="bg-warning">
                          <td>123</td>
                            <td>Suit Motion Capture</td>
                            <td></td>
                          </tr>
                          <tr>
                          <td>124</td>
                            <td>IMU - 1</td>
                            <td>m/s2</td>
                          </tr>
                          <tr>
                          <td>125</td>
                            <td>IMU - 2</td>
                            <td>m/s2</td>
                          </tr>
                          <tr>
                          <td>126</td>
                            <td>IMU - 3</td>
                            <td>m/s2</td>
                          </tr>

                        </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HumanMetric;
