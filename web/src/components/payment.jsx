import React, { Component } from "react";
import Header from "./shared/header";
import axios from "axios";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { FormGroup, Form, Input, Col, Button } from "reactstrap";
import { UserContext } from "core/userContext";
import ReactPayPal from "components/ReactPaypal";

export default function Payment() {
  const [checkout, setCheckout] = React.useState(false);

  return (
    <>
      <Header />
      <Container className=" mt--9" fluid>
        {/* Table */}
        <Col lg="8">
          <Card
            className="bg-secondary shadow border-0 mb-7"
            style={({ backgroundColor: "#f4f5f7" }, { marginLeft: "20rem" })}
          >
            <CardHeader className=" bg-transparent"></CardHeader>
            <CardBody>
              <div style={{ minHeight: 400 }}>
                {checkout === true ? (
                  <div className="payment-div">
                    <ReactPayPal />
                  </div>
                ) : (
                  <div>
                    <h1>React-PayPal</h1>
                    <button
                      onClick={() => {
                        setCheckout(true);
                      }}
                      className="checkout-button"
                    >
                      Pay Subscription
                    </button>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  );
}
