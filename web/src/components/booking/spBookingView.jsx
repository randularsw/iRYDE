import React, { Component } from "react";
import Header from "components/shared/header";
import { Container, Row, CardHeader, CardBody, Button, Col } from "reactstrap";
import { Card } from "@material-ui/core";
import { UserContext } from "core/userContext";
import { getIncomingAppointments } from "services/bookingService";
import SpIncomingAppointments from "./spIncomingAppointments";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class SpBookingView extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      incoming: [],
      value: 0,
    };
  }

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

  handleChange(event, newValue) {
    const value = newValue;
    this.setState({ value });
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
                        <Tab>Incoming</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                      </TabList>

                      <TabPanel>
                        <SpIncomingAppointments
                      incoming ={this.state.incoming}
                    />
                      </TabPanel>
                      <TabPanel>
                        <h2>Any content 2</h2>
                      </TabPanel>
                      <TabPanel>
                      <SpIncomingAppointments
                      incoming ={this.state.incoming}
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
