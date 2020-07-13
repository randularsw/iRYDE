import React, { Component } from "react";
import Header from "components/shared/header";
import { Container, Row, CardHeader, CardBody, Button, Col } from "reactstrap";
import { Card } from "@material-ui/core";
import { UserContext } from "core/userContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class VoBookingView extends Component {
  state = {};
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
                        {/* <SpIncomingAppointments
                          incoming={this.state.incoming}
                          onAccept={this.handleAcceptAppointment}
                          onCancel={this.handleCancelAppointment}
                        /> */}
                      </TabPanel>
                      <TabPanel>
                        {/* <SpConfirmedAppointments
                          confirmed={this.state.confirmed}
                          onConfirmed={this.handleConfirmedAppointment}
                        /> */}
                      </TabPanel>
                      <TabPanel>
                        {/* <SpFinishedAppointments
                          finished={this.state.finished}
                        /> */}
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
