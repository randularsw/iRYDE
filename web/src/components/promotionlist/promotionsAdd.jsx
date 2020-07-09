import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { FormGroup, Form, Input, Col, Button } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "react-moment";
import { InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";

const minDate = new Date(Date.now());

class PromotionsAdd extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.state = {
      //items: [],
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeStartDate(date) {
    this.setState({
      startDate: date,
    });
  }

  onChangeEndDate(date) {
    this.setState({
      endDate: date,
    });
  }

  render() {
    // const { items } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}

          <Col lg="10">
            <Card
              className="bg-secondary shadow border-0 mb-7"
              style={({ backgroundColor: "#f4f5f7" }, { marginLeft: "7.8rem" })}
            >
              <CardHeader className=" bg-transparent">
                <h3 className=" mb-0">Add promotions</h3>
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
                            required={true}
                            value={this.state.title}
                            onChange={this.onChangeTitle}
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
                            required={true}
                            value={this.state.description}
                            onChange={this.onChangeDescription}
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
                              onChange={this.onChangeStartDate}
                              selected={this.state.startDate}
                              minDate={minDate}
                              placeholderText="From date"
                              inputProps={{
                                placeholder: "Date Picker Here",
                              }}
                              timeFormat={true}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <DatePicker
                              onChange={this.onChangeEndDate}
                              selected={this.state.endDate}
                              minDate={this.state.startDate}
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
                        color="primary"
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
          </Col>
        </Container>
      </>
    );
  }
}

export default PromotionsAdd;
