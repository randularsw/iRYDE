import React, { Component } from "react";
import Header from "components/shared/header";
import { Container, Row, CardHeader, CardBody, Button, Col } from "reactstrap";
import { Card } from "@material-ui/core";
import { UserContext } from "core/userContext";
import { getIncomingAppointments } from "services/bookingService";
import SpIncomingAppointments from "./spIncomingAppointments";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class SpBookingView extends Component {
  static contextType = UserContext;
  state = {
    incoming: [],
    value: 0,
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

  handleIncomingAppointment = (appointment) => {
    const { incoming } = this.state;
    const index = incoming.indexOf(appointment);
    incoming.splice(index, 1);
    this.setState({ incoming });
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
                          onIncoming={this.handleIncomingAppointment}
                        />
                      </TabPanel>
                      <TabPanel>
                        <h2>Any content 2</h2>
                      </TabPanel>
                      <TabPanel>
                        <SpIncomingAppointments
                          incoming={this.state.incoming}
                          onIncoming={this.handleIncomingAppointment}
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
