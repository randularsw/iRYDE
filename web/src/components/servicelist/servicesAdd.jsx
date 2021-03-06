import React, { Component } from "react";
import Header from "../shared/header";
import axios from "axios";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { FormGroup, Form, Input, Col, Button } from "reactstrap";
import { UserContext } from "core/userContext";

class ServicesAdd extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.onChangeServicename = this.onChangeServicename.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      servicename: "",
      description: "",
      upload: "",

      //items: [],
    };
  }

  onChangeServicename(e) {
    this.setState({
      servicename: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const service = {
      servicename: this.state.servicename,
      description: this.state.description,
      imageUrl: this.state.upload,
      ownerId: this.context.state.user._id,
    };
    console.log(service);

    axios
      .post("http://localhost:4000/services/add", service)
      .then((res) => console.log(res.data));

    window.location = "/services";
  }

  uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "servicesgallery");
    this.setState({ loading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzwimulaq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    this.setState({
      upload: file.secure_url,
      loading: false,
    });
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

                    <Form onSubmit={this.onSubmit}>
                      <Row
                        className="justify-content-md-center"
                        style={{ marginTop: ".5rem" }}
                      >
                        <Col md="10">
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              placeholder="Service Category"
                              type="text"
                              required="true"
                              value={this.state.servicename}
                              onChange={this.onChangeServicename}
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
                              required="true"
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
                        <Col md="9">
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              placeholder="Upload the image"
                              type="file"
                              name="file"
                              onChange={this.uploadImage}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="1">
                          {this.state.upload && (
                            <i className="fas fa-check-circle fa-2x"></i>
                          )}
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
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default ServicesAdd;
