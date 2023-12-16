import React from 'react';
import { useEffect } from "react";
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

import { Card, CardHeader, CardBody, Row, Col,CardTitle,Table } from "reactstrap";

function EnvironmentMetric(props) {
    useEffect(() => {
        // Initialize DataTables
        $(document).ready(function () {
          $('#environment_metrics').DataTable();
        });
      }, []);
    return (
        <>
        <div className="content">
          <Row>
            <Col md="12">
            <Card>
            <CardHeader>
             <CardTitle tag="h4">Your Table</CardTitle>
            </CardHeader>
          <CardBody>
          <Table className="tablesorter" id="environment_metrics">
          <thead className="bg-warning">
              <tr>
              <th>1</th>
              <th>Earth Metrics/Units</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>2</td>
              <td>Surface Radiation</td>
              <td>342 w/m2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gravity</td>
              <td>9.807 m/s²</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Atmospheric Gases</td>
              <td>78% N2</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Wind Speed</td>
              <td>12 Km/Hour</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Mean Temperature</td>
              <td>15 °C</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Surface Pressure</td>
              <td>1 Bar</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Length of Day</td>
              <td>24 Hours</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Water Depth</td>
              <td>100 Meters</td>
            </tr>

            <tr className="bg-warning">
              <td>10</td>
              <td>Moon Metrics/Units</td>
              <td></td>
            </tr>
            <tr>
              <td>11</td>
              <td>Surface Radiation</td>
              <td>60 mSv/hr</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Gravity</td>
              <td>1.6 m/s²</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Atmospheric Gases</td>
              <td>33% Helium</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Wind Speed</td>
              <td>0 Km/Hour</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Mean Temperature</td>
              <td>-20°C</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Surface Pressure</td>
              <td>0 Bar</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Length of Day</td>
              <td>708.7 Hours</td>
            </tr>

            <tr className="bg-warning">
              <td>18</td>
              <td>Mars Metrics/Units</td>
              <td></td>
            </tr>
            <tr>
              <td>19</td>
              <td>Surface Radiation</td>
              <td>300 mSv/year</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Gravity</td>
              <td>3.7 m/s²</td>
            </tr>
            <tr>
              <td>21</td>
              <td>Atmospheric Gases</td>
              <td>95% CO2</td>
            </tr>
            <tr>
              <td>22</td>
              <td>Wind Speed</td>
              <td>20 Km/Hour</td>
            </tr>
            <tr>
              <td>23</td>
              <td>Mean Temperature</td>
              <td>-65°C</td>
            </tr>
            <tr>
              <td>24</td>
              <td>Surface Pressure</td>
              <td>0.01 Bar</td>
            </tr>
            <tr>
              <td>25</td>
              <td>Length of Day</td>
              <td>24.6 Hours</td>
            </tr>

            <tr className="bg-warning">
              <td>26</td>
              <td>Mercury Metrics/Units</td>
              <td></td>
            </tr>
            <tr>
            <td>27</td>
            <td>Surface Radiation</td>
            <td>msv/year</td>
            </tr>
            <tr>
            <td>28</td>
            <td>Gravity</td>
            <td>m/s²</td>
            </tr>
            <tr>
            <td>29</td>
            <td>Atmospheric Gases</td>
            <td>CO2</td>
            </tr>
            <tr>
            <td>30</td>
            <td>Wind Speed</td>
            <td>Km/Hour</td>
            </tr>
            <tr>
            <td>31</td>
            <td>Mean Temperature</td>
            <td>-°C</td>
            </tr>
            <tr>
            <td>32</td>
            <td>Surface Pressure</td>
            <td>Bar</td>
            </tr>
            <tr>
            <td>33</td>
            <td>Length of Day</td>
            <td>Hours</td>
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

export default EnvironmentMetric;