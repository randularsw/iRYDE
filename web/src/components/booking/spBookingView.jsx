import React, { Component } from "react";
import Header from "components/shared/header";
import { Container, Row, CardHeader, CardBody, Button, Col, } from "reactstrap";
import { Card } from "@material-ui/core";
import { UserContext } from "core/userContext";
import { getIncomingAppointments } from "services/bookingService";
import SpIncomingAppointments from "./spIncomingAppointments";

class SpBookingView extends Component {
  static contextType = UserContext;
  state = {
    incoming: [],
  };

  async componentDidMount() {
    try {
      const userData = await this.context.currentUser();
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
                  <div style={{ minHeight: 400, marginLeft: 5 }}>
                    {/* Page Content */}
                    <SpIncomingAppointments
                      incoming ={this.state.incoming}
                    />
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
