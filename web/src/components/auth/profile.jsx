import React, { Component } from "react";
import { UserContext } from "core/userContext";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import Header from "components/shared/header";

class Profile extends Component {
  static contextType = UserContext;

  state = {
    edit: false,
  };

  // async componentDidMount() {
  //   const userData = await this.context.currentUser();
  //   this.setState(userData);
  //   console.log(this.state.userData);
  // }

  toggleEdit = () => {
    if (this.state.edit) {
      //
    } else {
      //
    }
    const edit = !this.state.edit;
    this.setState({ edit });
  };

  render() {
    const { user, isAuthenticated } = this.context.state;
    const { edit } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2 mt-7" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/images/voPhoto.png")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      +72 Rep
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Beginner
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Bookings</span>
                        </div>
                        <div>
                          <span className="heading">2</span>
                          <span className="description">Vehicles</span>
                        </div>
                        {/* <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div> */}
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      <span>{user?.name}</span>
                    </h3>
                    <div className="h5 font-weight-300 text-muted">
                      <i className="fas fa-map-marker-alt"></i> {user?.city}
                    </div>

                    {/* <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Show more
                    </a> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow mb-5">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My Profile</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.toggleEdit}
                      >
                        <i class="fas fa-pen"></i>{" "}
                        {edit ? "Save" : "Edit"}
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-name"
                            >
                              Full Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={user?.name}
                              id="input-name"
                              placeholder="Full Name"
                              type="text"
                              disabled={edit ? "" : "true"}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={user?.email}
                              id="input-email"
                              placeholder="Email Address"
                              type="email"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-phone"
                            >
                              Phone
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={user?.phone}
                              id="input-phone"
                              placeholder="Phone"
                              type="text"
                              disabled={edit ? "" : "true"}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    {/* <hr className="my-4" /> */}
                    {/* Address */}
                    {/* <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6> */}
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={user?.address}
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                              disabled={edit ? "" : "true"}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={user?.city}
                              id="input-city"
                              placeholder="City"
                              type="text"
                              disabled={edit ? "" : "true"}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              defaultValue={user?.postal}
                              placeholder="Postal code"
                              type="number"
                              disabled={edit ? "" : "true"}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    {/* <hr className="my-4" /> */}
                    {/* Description */}
                    {/* <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                          type="textarea"
                        />
                      </FormGroup>
                    </div> */}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
