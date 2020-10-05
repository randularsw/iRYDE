import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, Container, Label } from "reactstrap";
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

import { Button, CardImg, CardTitle, CardText, Col } from "reactstrap";

import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
        labels:["1","2","3"],
        datasets:[
          {
            label:"Videos mades",
            data: ["4","5","4"]
          },
          {
            label:"Videos ",
            data: ["4","5","9"]
          }
        ]
      }


    };

    
  }
  

  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  // getCountSp(){
  //   var numberOfRows=db.users.count();
  //   console.log(numberOfRows);
  // }

  // getCountVo(){

  // }
  getChartData = canvas =>{
    const data =this.state.data;

    return data;
  }
   



  render() {
    // const { items } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h1 className=" mb-0">System Statistics</h1>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <Row>
                      <div style={{ width: "30rem" }}>
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardBody>
                            <Row>
                              <div className="col-md-6">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                   Service Providers
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  190
                                 
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col>
                            </Row>
                            
                          </CardBody>
                        </Card>
                      </div>
                      <div style={{ width: "30rem" }}>
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardBody>
                            <Row>
                              <div className="col-md-6">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                   Vehicle Owners
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  200
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col>
                            </Row>
                            
                          </CardBody>
                        </Card>
                      </div>
                    </Row>
                    
                    <h1>Service Providers' Details</h1>
                    <Table className="align-items-center" responsive>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Service Provider's Name</th>
                          <th scope="col">Total Bookings</th>
                          <th scope="col"></th>
                          <th scope="col"></th>

                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <Media className="align-items-center">
                              <Media>
                                <span className="mb-0 text-sm">
                                  Toyota Lanka
                                </span>
                              </Media>
                            </Media>
                          </th>
                          <td>1000</td>
                          <td></td>

                          <td></td>
                          <td className="text-right"></td>
                        </tr>
                      </tbody>
                    </Table>
                    
                    <Label> <h1>Users of the system</h1></Label>
                    <Card className="bg-default">
                      <CardBody>
                        <div className="chart">
                          {/* Chart wrapper */}
                          <Line
                            data={chartExample1.data1}
                            options={chartExample1.options}
                            getDatasetAtEvent={(e) => console.log(e)}
                          />
                        </div>
                      </CardBody>
                    </Card>
                    <Label><h1>Bookings of the Year</h1></Label>
                    <Card>
                      <CardBody>
                        <div className="chart">
                          {/* Chart wrapper */}
                          <Bar
                            data={chartExample2.data}
                            options={chartExample2.options}
                          />
                        </div>
                      </CardBody>
                    </Card>
                    
                  </div>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Statistics;
