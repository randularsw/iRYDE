import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { FormGroup, Form, Input, Col, Button } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import Datetime from "react-datetime";

import { InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";

class PromotionsAdd extends Component {
  state = {
    items: [],
  };

  render() {
    // const { items } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow" style={{ backgroundColor: "#f4f5f7" }}>
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Title</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}

                    <Form onSubmit={this.onSubmit}>
                      <Row
                        className="justify-content-md-center"
                        style={{ marginTop: ".5rem" }}
                      >
                        <Col md="8">
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              placeholder="Title"
                              type="text"
                              value={this.state.servicename}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row
                        className="justify-content-md-center"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <Col md="8">
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              placeholder="Enter the description"
                              type="textarea"
                              rows="2"
                              value={this.state.description}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row
                        className="justify-content-md-center"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <Col md="4">
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <DatePicker
                                onChange={this.onChange}
                                value={this.state.date}
                                placeholderText="From date"
                                inputProps={{
                                  placeholder: "Date Picker Here",
                                }}
                                timeFormat={false}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <DatePicker
                                onChange={this.onChange}
                                value={this.state.date}
                                placeholderText="To date"
                                inputProps={{
                                  placeholder: "Date Picker Here",
                                }}
                                timeFormat={false}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          color="warning"
                          type="submit"
                          size="lg"
                          style={{ marginTop: "2.5rem", width: "150px" }}
                        >
                          Add
                        </Button>
                      </div>
                    </Form>
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

export default PromotionsAdd;
