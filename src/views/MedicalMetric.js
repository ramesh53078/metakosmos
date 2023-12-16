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

function MedicalMetric() {

  useEffect(() => {
    // Initialize DataTables
    $(document).ready(function () {
      $('#medical_metrics').DataTable();
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
        <Table className="tablesorter" id="medical_metrics">
          <thead>
          <tr className="bg-warning">
              <th>S.No</th>
              <th>Lab Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Laboratory - 01 Routine Biochemistry</td>
              <td></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Laboratory - 02 Special Biochemistry</td>
              <td></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Laboratory - 03 Immunoassays</td>
              <td></td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Laboratory - 04 Coagulation, ELISA & Autoimmunity</td>
              <td></td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Laboratory - Clinical Pathology</td>
              <td></td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Laboratory - Cytology</td>
              <td></td>
            </tr>
            <tr>
              <td>7.</td>
              <td>Laboratory - Histopathology</td>
              <td></td>
            </tr>
            <tr>
              <td>8.</td>
              <td>Laboratory - Microbiology & Serology</td>
              <td></td>
            </tr>
            <tr>
              <td>9.</td>
              <td>2D-Echo</td>
              <td></td>
            </tr>
            <tr>
              <td>10.</td>
              <td>X-Ray</td>
              <td></td>
            </tr>
            <tr>
              <td>11.</td>
              <td>Dopplers</td>
              <td></td>
            </tr>
            <tr>
              <td>12.</td>
              <td>Endoscopy</td>
              <td></td>
            </tr>
            <tr>
              <td>13.</td>
              <td>TMT</td>
              <td></td>
            </tr>
            <tr>
              <td>14.</td>
              <td>Ultrasound</td>
              <td></td>
            </tr>
            <tr>
              <td>15.</td>
              <td>Radiology</td>
              <td></td>
            </tr>
            <tr>
              <td>16.</td>
              <td>ECG</td>
              <td></td>
            </tr>
            <tr>
              <td>17.</td>
              <td>Fitness Assessment & Biomechanics</td>
              <td></td>
            </tr>
            <tr>
              <td>18.</td>
              <td>DNA</td>
              <td></td>
            </tr>
            <tr>
              <td>19.</td>
              <td>Nutritional</td>
              <td></td>
            </tr>
            <tr>
              <td>20.</td>
              <td>Hearing & Vision</td>
              <td></td>
            </tr>
            <tr>
              <td>21.</td>
              <td>Respiratory</td>
              <td></td>
            </tr>
            <tr>
              <td>22.</td>
              <td>Cardiovascular</td>
              <td></td>
            </tr>
            <tr>
              <td>23.</td>
              <td>Vaccination</td>
              <td></td>
            </tr>
            <tr>
              <td>24.</td>
              <td>Radiation</td>
              <td></td>
            </tr>
            <tr>
              <td>25.</td>
              <td>Bone Density</td>
              <td></td>
            </tr>
            <tr>
              <td>26.</td>
              <td>Muscle Mapping</td>
              <td></td>
            </tr>
            <tr>
              <td>27.</td>
              <td>Fertility</td>
              <td></td>
            </tr>
            <tr>
              <td>28.</td>
              <td>Cognitive</td>
              <td></td>
            </tr>
            <tr>
              <td>29.</td>
              <td>Public Health Records (Google Cancer Genome Atlas)</td>
              <td></td>
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

export default MedicalMetric;
