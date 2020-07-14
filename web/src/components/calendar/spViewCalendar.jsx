import React, { Component, useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";
import Header from "../shared/header";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button,
  Modal,
} from "reactstrap";
import { getSpConfirmedAppointments } from "services/bookingService";
import { UserContext } from "core/userContext";

class SpViewCalendar extends Component {
  static contextType = UserContext;
  state = {
    confirmed: [],
  };

  async componentDidMount() {
    try {
        const userData = await this.context.currentUser();
        const { data: confirmed } = await getSpConfirmedAppointments(userData.user?._id);
        this.setState({confirmed});
        console.log(confirmed);

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
              <Card className=" shadow m-0 ">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">My Calendar</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                   
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

export default SpViewCalendar;
