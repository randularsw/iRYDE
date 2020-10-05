import React, { Component } from "react";
import Header from "./shared/header";
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
} from "reactstrap";
import { UserContext } from "core/userContext";

class Dashboard extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const userdata = await this.context.currentUser();
      this.setState(userdata);
    } catch (err) {
      console.log("Error", err);
    }
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
                  <h3 className=" mb-0"></h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 600 }}>
                    {/* Page Content */}
                    <Row className="mb-4">
                      <Col lg="6">
                        <Card className="bg-gradient-default">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0 text-white">
                                  Total traffic
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0 text-white">
                                  350,897
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                  <i className="ni ni-active-40" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-sm">
                              <span className="text-white mr-2">
                                <i className="fa fa-arrow-up" />
                                3.48%
                              </span>
                              <span className="text-nowrap text-light">
                                Since last month
                              </span>
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="bg-gradient-primary">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0 text-white">
                                  New users
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0 text-white">
                                  2,356
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                  <i className="ni ni-atom" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-sm">
                              <span className="text-white mr-2">
                                <i className="fa fa-arrow-up" />
                                3.48%
                              </span>
                              <span className="text-nowrap text-light">
                                Since last month
                              </span>
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
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

export default Dashboard;
