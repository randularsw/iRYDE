import React, { Component } from "react";
import Header from "../shared/header";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  CardTitle,
  Col,
  Button,
} from "reactstrap";

class Vehicles extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow ">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">My Vehicles</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <div className="row">
                      <div className="col-10"></div>
                      <div className="col">
                        <Button>+ ADD</Button>
                      </div>
                    </div>
                    <div className=" row m-5">
                      <div className="col-6 ">
                        <Card className="card-stats mb-4 mb-lg-0 bg-secondary">
                          <CardBody>
                            <Row>
                              <div className="col-3">
                                <small className=" text-muted ">
                                  Vehicle Brand
                                </small>
                                <br />
                                <span className="h3 font-weight-bold mb-0 m-0">
                                  Honda
                                </span>
                              </div>
                              <div className="col-3">
                                <small className=" text-muted mb-0">
                                  Vehicle Model
                                </small>
                                <br />
                                <span className="h3 font-weight-bold  m-0">
                                  TPS
                                </span>
                              </div>
                              <div className="col-3">
                                <small className=" text-muted m-0">
                                  Vehicle No
                                </small>
                                <br />
                                <span className="h3 font-weight-bold  m-0">
                                  DW-4590
                                </span>
                              </div>
                              <div className="col-1">
                                <div className="icon icon-shape bg-default text-white rounded-circle shadow">
                                  <i className="fas fa-biking" />
                                </div>
                              </div>
                            </Row>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="col-6 ">
                        <Card className="card-stats mb-4 mb-lg-0 bg-secondary">
                          <CardBody>
                            <Row>
                              <div className="col-3">
                                <small className=" text-muted ">
                                  Vehicle Brand
                                </small>
                                <br />
                                <span className="h3 font-weight-bold mb-0 m-0">
                                  Honda
                                </span>
                              </div>
                              <div className="col-3">
                                <small className=" text-muted mb-0">
                                  Vehicle Model
                                </small>
                                <br />
                                <span className="h3 font-weight-bold  m-0">
                                  TPS
                                </span>
                              </div>
                              <div className="col-3">
                                <small className=" text-muted m-0">
                                  Vehicle No
                                </small>
                                <br />
                                <span className="h3 font-weight-bold  m-0">
                                  DW-4590
                                </span>
                              </div>
                              <div className="col-1">
                                <div className="icon icon-shape bg-default text-white rounded-circle shadow">
                                  <i className="fas fa-biking" />
                                </div>
                              </div>
                            </Row>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
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

export default Vehicles;
