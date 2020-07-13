import React, { Component } from "react";
import Header from "components/shared/header";
import { Container, Row, CardHeader, CardBody, Button, Col } from "reactstrap";
import { Card } from "@material-ui/core";
import { UserContext } from "core/userContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getVoPendingAppointments,
  getVoConfirmedAppointments,
} from "services/bookingService";
import { getVoFinishedAppointments } from "services/bookingService";
import VoPendingAppointments from "./voPendingAppointments";
import VoConfirmedAppointments from "./voConfirmedAppointments";
import VoFinishedAppointments from "./voFinishedAppointments";

class VoBookingView extends Component {
  static contextType = UserContext;
  state = {
    pending: [],
    confirmed: [],
    finished: [],
  };

  async componentDidMount() {
    try {
      const userData = await this.context.currentUser();
      const { data: pending } = await getVoPendingAppointments(
        userData.user?._id
      );
      const { data: confirmed } = await getVoConfirmedAppointments(
        userData.user?._id
      );
      const { data: finished } = await getVoFinishedAppointments(
        userData.user?._id
      );
      this.setState({ pending, confirmed, finished });
    } catch (error) {
      console.log("err", error);
    }
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

                    <Tabs>
                      <TabList>
                        <Tab>Pending Appointments</Tab>
                        <Tab> Approved Appointments</Tab>
                        <Tab>History</Tab>
                      </TabList>

                      <TabPanel>
                        <VoPendingAppointments pending={this.state.pending} />
                      </TabPanel>
                      <TabPanel>
                        <VoConfirmedAppointments
                          confirmed={this.state.confirmed}
                        />
                      </TabPanel>
                      <TabPanel>
                        <VoFinishedAppointments
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

export default VoBookingView;
