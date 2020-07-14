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
import { useEffect } from "react";
import { addBooking } from "services/bookingService";

const ServiceProviderBooking = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { vehicles, user, sp, services, onToggle } = props;
  const [startDate, setStartDate] = useState(null);
  const [available, setAvailable] = useState(false);
  const [serviceState, setServices] = useState([]);
  const [vehicle,setVehicle] = useState([]);
  const [selectedTime, setTime] = useState();
  const bookingServices = [];

  useEffect(() => {
    let serviceState = services;
    setServices(
      serviceState.map((s) => {
        return {
          select: false,
          _id: s._id,
          servicename: s.servicename,
          description: s.description,
        };
      })
    );
  }, []);

  const times = [
    "8.00 AM",
    "9.00 AM",
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "1.00 PM",
  ];

  const onChange = (date) => {
    setStartDate(date);
    const a = true;
    setAvailable(a);
    

  };

  const onChangeVehicle = async (e) => {
    console.log(e.target.value);
    vehicles.forEach(v => {
      if(v._id == e.target.value ){
        setVehicle(v);
      }
    });
    
  };

  const onChangeTime = (e) => {
    setTime(e.target.value);
  };

  const onSubmit = async (data) => {
    try {
      data.vehicle = vehicle;
      data.sp = sp._id;
      data.spName = sp.name;
      data.vo = user._id;
      data.voName=user.name;
      data.status='pending';
      data.isRated = false;
      data.date = startDate;
      data.time = selectedTime;
      serviceState.map((s) => {
        if (s.select == true) {
          bookingServices.push(s.servicename);
        }
      });
      data.bookingServices = bookingServices;
      onToggle("formModal");
      const res = await addBooking(data);
    } catch (error) {
      console.log(error);
    }
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
          {errors.vehicleId?.type === "required" && (
            <div className="text-muted font-italic ml-4">
              <small className="text-danger">Vehicle Required</small>
            </div>
          )}
        </FormGroup>
        <FormGroup className="mb-3">
          <label className="mt-4 mb-3 text-gray">Select Services</label>
          {serviceState.map((s) => (
            <div
              className="custom-control custom-control-alternative custom-checkbox mb-3 ml-4"
              key={s._id}
            >
              <input
                className="custom-control-input"
                id={s._id}
                type="checkbox"
                checked={s.select}
                value={s.servicename}
                onChange={(e) => {
                  let checked = e.target.checked;
                  setServices(
                    serviceState.map((d) => {
                      if (s._id == d._id) {
                        d.select = checked;
                      }
                      return d;
                    })
                  );
                }}
              />
              <label className="custom-control-label" htmlFor={s._id}>
                {s.servicename}
              </label>
            </div>
          ))}
        </FormGroup>

        <FormGroup className="mb-3 mt-5">
          <Row>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              minDate={new Date()}
              excludeDates={[subDays(new Date(), -9), subDays(new Date(), -5)]}
              showDisabledMonthNavigation
              placeholderText="Select Date"
              className="input-group-alternative p-2"
              innerRef={register({ required: true })}
            />
          </Row>
        </FormGroup>
        <FormGroup className="mt-4">
          {available === true ? (
            <div>
              <label className="mt-4 mb-3 text-gray">Select Time</label>

              <Row>
                {times.map((t) => (
                  <div className="col-4" key={t}>
                    <input
                      type="radio"
                      name="times"
                      ckecked={selectedTime === t}
                      value={t}
                      onChange={onChangeTime}
                      innerRef={register({ required: true })}
                    />{" "}
                    {t}
                  </div>
                ))}
              </Row>
            </div>
          ) : (
            console.log("false")
          )}
        </FormGroup>

        <div className="text-center mb-0">
          <Button className="my-4" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ServiceProviderBooking;
