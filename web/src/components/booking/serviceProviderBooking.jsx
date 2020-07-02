import React, { Component } from "react";
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
  Col,
  Card,
  FormGroup,
  Input,
} from "reactstrap";
import Header from "components/shared/header";
import Datetime from "react-datetime";

class ServiceProviderBooking extends Component {
  state = {
    details: [],
      date: new Date(),
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRku3IvlGnEq7Bn3mlC-vZqrtFu8a-jwXsoqA&usqp=CAU",
  };
 

  async componentDidMount() {
    try {
      // const {data:details} = await getServiceProvider(this.props.match.params.id);
      // this.setState({details});
      // console.log(this.state.details.username);
    } catch (err) {
      console.log("Error", err);
    }
  }

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow ">
                <CardHeader className=" bg-transparent">
                  <Row>
                    <div className="col-1">
                      <img
                        src={this.state.logo}
                        style={{ width: 100, height: 50 }}
                      />
                    </div>
                    <div className="col-6 m-0">
                      <h3 className=" mb-0" style={{ fontSize: 30 }}>
                        Online Service Booking
                      </h3>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <div className="col   mr-5 ml-4 ">
                      <div style={{ minHeight: 400, padding: 3 }}>
                        {/* Page Content */}
                        <Form role="form">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Select your vehicle
                            </label>
                            <InputGroup className="input-group-alternative">
                              <Input
                                placeholder="Select your vehicle"
                                type="select"
                                className="input-group-alternative"
                              >
                                <option className="input-group-alternative">
                                  Oil Change
                                </option>
                                <option className="input-group-alternative">
                                  2
                                </option>
                                <option className="input-group-alternative">
                                  3
                                </option>
                              </Input>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Select Service
                            </label>
                            <InputGroup className="input-group-alternative">
                              <Input
                                placeholder="Select your vehicle"
                                type="select"
                                className="input-group-alternative"
                              >
                                <option className="input-group-alternative">
                                  Oil Change
                                </option>
                                <option className="input-group-alternative">
                                  2
                                </option>
                                <option className="input-group-alternative">
                                  3
                                </option>
                              </Input>
                            </InputGroup>
                          </FormGroup>

                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText></InputGroupText>
                              </InputGroupAddon>
                              <Datetime
                                inputProps={{
                                  placeholder: "Date Picker Here",
                                }}
                                timeFormat={true}
                              />
                            </InputGroup>
                          </FormGroup>

                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="primary"
                              type="button"
                            >
                              Submit
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default ServiceProviderBooking;
