import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Button,
} from "reactstrap";

class ServicesAdd extends Component {
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
                  <h3 className=" mb-0">Add Services</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}

                    <Form>
                      <Row
                        className="justify-content-md-center"
                        style={{ marginTop: ".5rem" }}
                      >
                        <Col md="10" mx-auto>
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              placeholder="Service Category"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row
                        className="justify-content-md-center"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <Col md="10">
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              placeholder="Enter the description"
                              type="textarea"
                              rows="2"
                            />
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
                          type="button"
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

export default ServicesAdd;
