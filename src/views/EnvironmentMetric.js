import React, { useContext } from 'react';
import { useEffect } from "react";
import EnvironmentDataContext from 'contexts/EnvironmentDataContext';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

import { Card, CardHeader, CardBody, Row, Col,CardTitle,Table } from "reactstrap";

function EnvironmentMetric(props) {

  const {data} = useContext(EnvironmentDataContext);

  console.log(data);

    useEffect(() => {
        // Initialize DataTables
        $(document).ready(function () {
          $('#environment_metrics').DataTable();
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
             <CardTitle tag="h4">Environment Metrics</CardTitle>
            </CardHeader>
          <CardBody>
          <Table className="tablesorter" id="environment_metrics" style={{textAlign:'justify'}} responsive>
          <thead>
              <tr>
              <th>S.No</th>
              <th>Metric</th>
              <th>Cluster</th>
              <th>Sub Cluster</th>
              <th>Unit</th>
              <th>Unit Range</th>
              <th>Extraction</th>
              <th>Frequency</th>
              <th>Standard</th>
              {/* <th>Add Column</th> */}
              </tr>
            </thead>
            <tbody>
            {renderTable(data.earthMetrics)}
            {renderTable(data.moonMetrics)}
            {renderTable(data.marsMetrics)}
            {renderTable(data.mercuryMetrics)}
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