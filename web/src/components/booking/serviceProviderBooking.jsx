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
  CustomInput,
} from "reactstrap";
import Header from "components/shared/header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";

const ServiceProviderBooking = (props) => {
  const { vehicles, userId, sp, services } = props;
  const [startDate, setStartDate] = useState(null);
  const [available, setAvailable] = useState(false);
  const times = ["8.00 AM", "10.00 AM", "2.00 PM"];

  const onChange = (date) => {
    setStartDate(date);
    const a = true;
    setAvailable(a);
  };

  const onChangeVehicle = (e) => {
    console.log(e.target.value);
  };

  const onChangeService = (e) =>{
    console.log(e.target.value);
  }

  console.log(startDate);
  return (
    <div>
      {/* Page Content */}

      <Form role="form">
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <CustomInput
              name="brand"
              type="select"
              onChange={onChangeVehicle}
              className="input-group-alternative"
            >
              <option className="input-group-alternative" value="">
                Select Vehicle
              </option>
              {vehicles.map((v) => (
                <option key={v._id} value={v._id}>
                  {v.brand} {v.model} {v.vehicleNo}
                </option>
              ))}
            </CustomInput>
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <CustomInput
              name="brand"
              type="select"
              onChange={onChangeService}
              className="input-group-alternative"
            >
              <option className="input-group-alternative" value="">
                Select Service
              </option>
              {vehicles.map((v) => (
                <option key={v._id} value={v._id}>
                  {v.brand} {v.model} {v.vehicleNo}
                </option>
              ))}
            </CustomInput>
          </InputGroup>
        </FormGroup>

        <FormGroup className="mb-3">
          <DatePicker
            selected={startDate}
            onChange={onChange}
            minDate={new Date()}
            excludeDates={[subDays(new Date(), -9), subDays(new Date(), -5)]}
            showDisabledMonthNavigation
            placeholderText="Select Date"
          />
        </FormGroup>
        <FormGroup className="mb-3"></FormGroup>
        <div className="text-center">
          <Button className="my-4" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>

      <Row></Row>
      <Row>
        {available === true ? (
          <div className="btn-group" role="group" aria-label="Basic example">
            <div>
              <Row className="m-2">
                <p>Available Times</p>
              </Row>
              <Row className="m-1">
                {times.map((t) => (
                  <Button key={t}>{t}</Button>
                ))}
              </Row>
            </div>
          </div>
        ) : (
          console.log("false")
        )}
      </Row>
    </div>
  );
};

export default ServiceProviderBooking;
