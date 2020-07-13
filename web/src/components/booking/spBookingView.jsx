import React, { Component } from "react";
import Header from "components/shared/header";
import { Container, Row, CardHeader, CardBody, Button, Col } from "reactstrap";
import { Card } from "@material-ui/core";
import { UserContext } from "core/userContext";
import {
  getIncomingAppointments,
  getConfirmedAppointments,
  getFinishedAppointments,
} from "services/bookingService";
import SpIncomingAppointments from "./spIncomingAppointments";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SpConfirmedAppointments from "./spConfirmedAppointments";
import SpFinishedAppointments from "./spFinishedAppointments";

class SpBookingView extends Component {
  static contextType = UserContext;
  state = {
    incoming: [],
    confirmed: [],
  };

  async componentDidMount() {
    try {
      const userData = await this.context.currentUser();
      const { data: incoming } = await getIncomingAppointments(
        userData.user?._id
      );
      const { data: confirmed } = await getConfirmedAppointments(
        userData.user?._id
      );
      const { data: finished } = await getFinishedAppointments(
        userData.user?._id
      );
      this.setState({ incoming, confirmed, finished });
    } catch (error) {
      console.log("err", error);
    }
  }

  handleAcceptAppointment = (appointment) => {
    const { incoming } = this.state;
    const index = incoming.indexOf(appointment);
    incoming.splice(index, 1);
    this.setState({ incoming });
    const { confirmed } = this.state;
    confirmed.push(appointment);
    this.setState({ confirmed });
  };
  handleCancelAppointment = (appointment) => {
    const { incoming } = this.state;
    const index = incoming.indexOf(appointment);
    incoming.splice(index, 1);
    this.setState({ incoming });
  };

  handleConfirmedAppointment = (appointment) => {
    const { confirmed } = this.state;
    const index = confirmed.indexOf(appointment);
    confirmed.splice(index, 1);
    this.setState({ confirmed });
    const { finished } = this.state;
    finished.push(appointment);
    this.setState({ finished });
  };

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

                    <Tabs>
                      <TabList>
                        <Tab>Pending Appointments</Tab>
                        <Tab> Approved Appointments</Tab>
                        <Tab>History</Tab>
                      </TabList>

                      <TabPanel>
                        <SpIncomingAppointments
                          incoming={this.state.incoming}
                          onAccept={this.handleAcceptAppointment}
                          onCancel={this.handleCancelAppointment}
                        />
                      </TabPanel>
                      <TabPanel>
                        <SpConfirmedAppointments
                          confirmed={this.state.confirmed}
                          onConfirmed={this.handleConfirmedAppointment}
                        />
                      </TabPanel>
                      <TabPanel>
                        <SpFinishedAppointments
                          finished={this.state.finished}
                        />
                      </TabPanel>
                    </Tabs>
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
