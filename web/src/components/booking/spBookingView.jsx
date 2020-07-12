import React, { Component } from "react";
import Header from "components/shared/header";
import { Container, Row, CardHeader, CardBody, Button, Col } from "reactstrap";
import { Card } from "@material-ui/core";
import { UserContext } from "core/userContext";
import { getIncomingAppointments } from "services/bookingService";

class SpBookingView extends Component {
  static contextType = UserContext;
  state = {
    currentUserId: "",
    incoming: [],
  };

  async componentDidMount() {
    try {
      const userData = await this.context.currentUser();
      this.state.currentUserId = userData.user?._id;
      const { data: incoming } = await getIncomingAppointments(
        userData.user?._id
      );
      this.setState({ incoming });
    } catch (error) {
      console.log("err", error);
    }
  }

  changeDateFormat(f) {
    let d = new Date(f); 
    let x = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
    return (x);
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
                        {this.state.incoming.map((i) => (
                          <Card
                            className="ml-30 mr-30 mb-3"
                            style={{ width: 800 }}
                            key={i._id}
                          >
                            <CardHeader className="m-0 p-1  pt-2 bg-info" >
                              <Row>
                                <div className="col-7">
                                  <i className="fas fa-user pr-2 pl-2"></i>
                                  {i.voName}
                                </div>
                                <div className="col">
                                  <Row>
                                    <small className="mr-3 mt-1">
                                      <b> Date:</b>
                                      {this.changeDateFormat(i?.date)}
                                    </small>
                                    <small className="mr-3 mt-1">
                                      <b> Time:</b>{i?.time}
                                    </small>
                                    <div>
                                      <Button size="sm" color="default">Accept</Button>
                                    </div>
                                  </Row>
                                </div>
                              </Row>
                            </CardHeader>
                            <CardBody className="m-0 p-0">
                              <Row className="m-0 p-0">
                                <div className="col-7 border-right">
                                  <small>
                                    <b>Services</b>
                                  </small>
                                  <ul>
                                   {i?.services.map((s)=>(
                                    <li key={s}> 
                                      <small>{s}</small>
                                    </li>
                                   ))}
                                    
                                  </ul>
                                </div>
                                {i.vehicle.map((v)=>(
                                     <div className="col mt-2 mb-2" key={v._id}>
                                  
                                     <Row>
                                       <small className="mr-3 ml-3 mt-2">
                                         <b>Vehicle No:</b>{v.vehicleNo}
                                       </small>
                                       <small className="mr-3 ml-2 mt-2">
                                         <b>Vehicle Type:</b>{v.type}
                                       </small>
                                     </Row>
                                     <Row>
                                       <small className="mr-3 ml-3 mt-2">
                                         <b>Vehicle Brand:</b>{v.brand}
                                       </small>
                                       <small className="mr-3 ml-2 mt-2">
                                         <b>Vehicle Model:</b>{v.model}
                                       </small>
                                     </Row>
                                   </div>
                                    ))}
                               
                              </Row>
                            </CardBody>
                          </Card>
                        ))}
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
