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
import React, { useContext } from 'react';
import { useEffect } from "react";
import HumanDataContext from "contexts/HumanDataContext";
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';


// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,CardTitle,Table } from "reactstrap";

function HumanMetric() {

  const {data} = useContext(HumanDataContext);

  console.log(data);

  useEffect(() => {
    // Initialize DataTables
    $(document).ready(function () {
      $('#human_metrics').DataTable();
    });
  }, []);

  function renderTable(metrics) {
    return metrics.map((metric) => (
      <tr key={metric.id} 
      // className={metric.metric === "Length of Day" ? "bg-warning" : ""}
      >
        <td>{metric.id}</td>
        <td>{metric.metric}</td>
        <td>{metric.cluster}</td>
        <td>{metric.subCluster}</td>
        <td>{metric.unit}</td>
        <td>{metric.range}</td>
        <td>{metric.extraction}</td>
        <td>{metric.frequency}</td>
        <td>{metric.standard}</td>
      </tr>
    ));
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
          <Card>
              <CardHeader>
                <CardTitle tag="h4">Human Metric</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter"  id="human_metrics" style={{textAlign:'justify'}}>
                  <thead className="text-primary">
                    <tr>
                      <th>S.NO</th>
                      <th>Metric</th>
                      <th>Cluster</th>
                      <th>Sub Cluster</th>
                      <th>Unit</th>
                      <th>Unit Range</th>
                      <th>Extraction</th>
                      <th>Frequency</th>
                      <th>Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                  {renderTable(data.metrics)}
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
