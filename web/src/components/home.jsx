import React, { Component } from "react";
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Home extends Component {
  state = {
    items: [],
  };

  render() {
    // const { items } = this.state;
    return (
      <div>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input disabled placeholder="Regular" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <InputGroup className="mb-4">
                  <Input placeholder="Birthday" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  className="is-valid"
                  placeholder="Success"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  className="is-invalid"
                  placeholder="Error Input"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Home;
