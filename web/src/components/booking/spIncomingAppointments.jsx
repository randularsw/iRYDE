import React, { Component } from "react";
import { Container, Row, CardHeader, CardBody, Button, Col } from "reactstrap";
import { Card } from "@material-ui/core";
import { updateStatus } from "services/bookingService";

const SpIncomingAppointments = (props) => {
  const { incoming, onAccept, onCancel } = props;

  const changeDateFormat = (f) => {
    let d = new Date(f);
    let x = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    return x;
  };

  const changeAcceptStatus = async (id, appointment) => {
    appointment.status = "confirmed";
    onAccept(appointment);
    const res = await updateStatus(id, appointment);
  };

  const changeCancelStatus = async (id, appointment) => {
    onCancel(appointment);
    appointment.status = "canceled";
    const res = await updateStatus(id, appointment);
  };

  return (
    <div className="">
      <div className=" mt-4">
        {incoming.map((i) => (
          <Card className="ml-30 mr-30 mb-3" style={{ width: 900 }} key={i._id}>
            <CardHeader className="m-0 p-1  pt-2 bg-default">
              <Row>
                <div className="col-7 text-secondary">
                  <i className="fas fa-user pr-2 pl-2 text-secondary"></i>
                  {i.voName}
                </div>
                <div className="col text-secondary">
                  <Row>
                    <small className="mr-3 mt-1 ">
                      <b> Date:</b>
                      {changeDateFormat(i?.date)}
                    </small>
                    <small className="mr-3 mt-1">
                      <b> Time:</b>
                      {i?.time}
                    </small>
                    <div>
                      <Button
                        size="sm"
                        color="info"
                        onClick={() => changeAcceptStatus(i._id, i)}
                      >
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        color="danger"
                        onClick={() => changeCancelStatus(i._id, i)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Row>
                </div>
              </Row>
            </CardHeader>
            <CardBody className="m-0 p-0">
              <Row className="m-0 p-0">
                <div className="col-7 border-right">
                  <small>
                    <b>Services</b>
                  </small>
                  <ul>
                    {i?.services.map((s) => (
                      <li key={s}>
                        <small>{s}</small>
                      </li>
                    ))}
                  </ul>
                </div>
                {i.vehicle.map((v) => (
                  <div className="col mt-2 mb-2" key={v._id}>
                    <Row>
                      <small className="mr-3 ml-3 mt-2">
                        <b>Vehicle No:</b>
                        {v.vehicleNo}
                      </small>
                      <small className="mr-3 ml-2 mt-2">
                        <b>Vehicle Type:</b>
                        {v.type}
                      </small>
                    </Row>
                    <Row>
                      <small className="mr-3 ml-3 mt-2">
                        <b>Vehicle Brand:</b>
                        {v.brand}
                      </small>
                      <small className="mr-3 ml-2 mt-2">
                        <b>Vehicle Model:</b>
                        {v.model}
                      </small>
                    </Row>
                  </div>
                ))}
              </Row>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SpIncomingAppointments;
