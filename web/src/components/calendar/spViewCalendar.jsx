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
import UnavailableDates from "./unavailableDates";

class SpViewCalendar extends Component {
  static contextType = UserContext;
  state = {
    confirmed: [],
    daysDiff: [],
    date: new Date(),
  };

  async componentDidMount() {
    try {
      const userData = await this.context.currentUser();
      const { data: confirmed } = await getSpConfirmedAppointments(
        userData.user?._id
      );
      
      this.setState({ confirmed });
      const daysDiff = [];
      console.log(confirmed);
      this.state.confirmed.map((c) => {
        const appointmentDate = new Date(c.date);
        console.log(appointmentDate);
        const today = new Date().toISOString();
        const diff = new Date(appointmentDate).getTime() - new Date(today).getTime(); // Gives difference between 2 days
        const diffDates = Math.round(diff / (1000 * 3600 * 24)); // convert it to np of days format
        daysDiff.push(diffDates);
        console.log(1111111,daysDiff);
      });
      this.setState({ daysDiff });
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
                    <DatePicker
                      selected={new Date()}
                      highlightDates={this.state.daysDiff.map((i) => {
                        const d = new Date();
                        d.setDate(d.getDate() + i);
                        return d;
                      })}
                      inline
                      showDisabledMonthNavigation
                      className="input-group-alternative p-2"
                    />
                    
                    <UnavailableDates/>
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
