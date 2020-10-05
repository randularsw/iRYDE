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
import { getTimeSlots } from "services/timeSlots";
import { updateTimeSLot } from "services/timeSlots";

const ServiceProviderBooking = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { vehicles, user, sp, services, onToggle,unavailableDates } = props;
  const [startDate, setStartDate] = useState(null);
  const [available, setAvailable] = useState(false);
  const [serviceState, setServices] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [selectedTime, setTime] = useState();
  const [timeSlot, setTimeSlot] = useState([]);
  const [resObject, setObject] = useState({});

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

  const onChange = async (date) => {
    setStartDate(date);
    let t = [];
    const slot = 2;
    const res = await getTimeSlots(sp._id, date);
    console.log(res.data);
    const arr = [];
    //res will be array or object
    if (res.data.length > 0) {
      setObject(res.data[0]); // res will be array
      res.data[0].timeSlots.forEach((s) => {
        if (s.filledSlots != slot) {
          arr.push(s.time);
        }
      });
    } else {
      setObject(res.data); //res will be object
      res.data.timeSlots.forEach((s) => {
        arr.push(s.time);
      });
    }
    setTimeSlot(arr); // update timeSlots array in local state
    const a = true;
    setAvailable(a);
  };

  const onChangeVehicle = async (e) => {
    console.log(e.target.value);
    vehicles.forEach((v) => {
      if (v._id == e.target.value) {
        setVehicle(v);
      }
    });
  };

  const onChangeTime = (e) => {
    setTime(e.target.value);
    let x = resObject;
    x.timeSlots.map((s) => {
      console.log(666, s.time);
      console.log(e.target.value);
      if (s.time === e.target.value) {
        s.filledSlots = s.filledSlots + 1;
        console.log(666, s);
      }
    });
    setObject(x);
  };

  const onSubmit = async (data) => {
    console.log(resObject.timeSlots);
    const received = await updateTimeSLot(resObject._id, resObject);
    console.log(8, received);
    try {
      data.vehicle = vehicle;
      data.sp = sp._id;
      data.spName = sp.name;
      data.vo = user._id;
      data.voName = user.name;
      data.status = "pending";
      data.isRated = false;
      data.date = startDate;
      data.time = selectedTime;
      const bookingServices = [];
      serviceState.map((s) => {
        if (s.select == true) {
          bookingServices.push(s.servicename);
        }
      });
      data.bookingServices = bookingServices;
      onToggle("formModal");
      const res = await addBooking(data);
      console.log(555555555555, res.data.sp);
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
              excludeDates={unavailableDates.map((i) => {
                const d = new Date();
                d.setDate(d.getDate() + i);
                console.log(89,unavailableDates);
                return d;
              })}
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
                {timeSlot.map((t) => (
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
