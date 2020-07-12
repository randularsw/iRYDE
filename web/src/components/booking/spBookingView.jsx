import React, { Component } from "react";
import Header from "components/shared/header";
import { Container, Row, CardHeader, CardBody, Button, Col } from "reactstrap";
import { Card } from "@material-ui/core";
import { UserContext } from "core/userContext";

class SpBookingView extends Component {
  static contextType = UserContext;
  state={

  }

  async componentDidMount(){
    
  }

  render() {
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Appointments</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400, margin: 5 }}>
                    {/* Page Content */}
                    <div className="">
                      <h3 className="text-gray">Incoming</h3>
                      <div className="ml-8 mt-4">
                        <Card className="ml-30 mr-30" style={{ width: 800 }}>
                          <CardHeader className="m-0 p-1  pt-2 bg-info">
                            <Row>
                              <div className="col-7">
                                <i className="fas fa-user pr-2 pl-2"></i>Hashan
                              </div>
                              <div className="col">
                                <Row>
                                  <small className="mr-3 mt-1">
                                    <b> Date:</b>2020/08/19{" "}
                                  </small>
                                  <small className="mr-3 mt-1">
                                    <b> Time:</b> 8.00 AM
                                  </small>
                                  <div>
                                    <Button size="sm">Accept</Button>
                                  </div>
                                </Row>
                              </div>
                            </Row>
                          </CardHeader>
                          <CardBody className="m-0 p-0">
                            <Row className="m-0 p-0">
                              <div className="col-7 border-right">
                                <small >
                                  <b>Services</b>
                                </small>
                                <ul>
                                  <li><small>Lorem ipsum</small></li>
                                  <li><small>Lorem ipsum</small></li>
                                  
                                </ul>
                              </div>
                              <div className="col mt-2">
                                <Row>
                                <small className='mr-3 ml-3 mt-2'>
                                  <b>Vehicle No:</b>WD 4578
                                </small>
                                <small className='mr-3 ml-2 mt-2'>
                                  <b>Vehicle Type:</b>Car
                                </small>
                                </Row>
                               <Row>
                               <small className='mr-3 ml-3 mt-2' >
                                  <b>Vehicle Brand:</b>Toyota
                                </small>
                                <small className='mr-3 ml-2 mt-2'>
                                  <b>Vehicle Model:</b>Vitz
                                </small>
                               </Row>
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

export default SpBookingView;
