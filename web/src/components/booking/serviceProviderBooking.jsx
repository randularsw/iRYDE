import React, { Component, useState } from "react";
import {
  CardHeader,
  Button,
  CardBody,
  Form,
  InputGroup,
  InputGroupAddon,
  Container,
  InputGroupText,
  Row,
  Card,
  FormGroup,
  Input,
} from "reactstrap";
import Header from "components/shared/header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";

const ServiceProviderBooking = () => {
  const [startDate, setStartDate] = useState(null);
  console.log(startDate);
  return (
    <>
      <Header />
      <Container className=" mt--9" fluid>
        {/* Table */}
        <Row>
          <div className=" col">
            <Card className=" shadow">
              <CardHeader className=" bg-transparent">
                <h3 className=" mb-0">Title</h3>
              </CardHeader>
              <CardBody>
                <div style={{ minHeight: 400 }}>
                  {/* Page Content */}
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    excludeDates={[
                      subDays(new Date(), -9),
                      subDays(new Date(), -5),
                    ]}
                    showDisabledMonthNavigation
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ServiceProviderBooking;
