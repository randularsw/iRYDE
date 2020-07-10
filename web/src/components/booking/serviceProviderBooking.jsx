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
import { useForm } from "react-hook-form";

const ServiceProviderBooking = (props) => {
  const { register, handleSubmit, errors } = useForm();
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

  
  const onSubmit = async (data) => {
    data.bookingDate = startDate;
    console.log('hook',data);
    // try {
    //   const {data:vehicle} = await addVehicle(data);
    //   console.log(vehicle);
    //   props.onAddVehicle(vehicle);
    // } catch (error){
    //   console.log(error);
    // }
    // props.onToggle("formModal")
  };

  return (
    <div>
      {/* Page Content */}

    
      <Form role="form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <CustomInput
              name="vehicleId"
              type="select"
              onChange={onChangeVehicle}
              className="input-group-alternative"
              innerRef={register({ required: true })}
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
        {/* <FormGroup className="mb-3">
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
              {services.map((s) => (
                <option key={s._id} value={s.servicename}>
                  {s.servicename} 
                </option>
              ))}
            </CustomInput>
          </InputGroup>
        </FormGroup> */}

        <FormGroup className="mb-3">
          <DatePicker
            selected={startDate}
            onChange={onChange}
            minDate={new Date()}
            excludeDates={[subDays(new Date(), -9), subDays(new Date(), -5)]}
            showDisabledMonthNavigation
            placeholderText="Select Date"
            className="input-group-alternative p-2"
          />
        </FormGroup>
        <FormGroup className="mb-3">
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
        </FormGroup>
        <div className="text-center">
          <Button className="my-4" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>

      <Row></Row>
      <Row>
        
      </Row>
    </div>
  );
};

export default ServiceProviderBooking;
