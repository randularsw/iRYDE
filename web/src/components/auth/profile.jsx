import React, { Component, useContext, useState } from "react";
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
import { useForm } from "react-hook-form";

const Profile = (props) => {
  const context = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();

  const [edit, setEdit] = useState(false);

  const onSubmit = async (data) => {
    try {
      data._id = context.state.user._id;
      if (edit) {
        // save user
        console.log(data);
        await context.updateUser(data);
      }
      setEdit(!edit);
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "servicesgallery");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzwimulaq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file.secure_url);
    const d = { _id: context.state.user._id, photo: file.secure_url };
    await context.uploadPhoto(d);
  };

  const { user } = context.state;
  return (
    <>
      <Header />
      <Container className=" mt--9" fluid>
        {/* Table */}
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Input
                  style={{ display: "none" }}
                  className="form-control-alternative"
                  placeholder="Upload the image"
                  type="file"
                  name="file"
                  id="upload"
                  onChange={uploadImage}
                />
                <Col className="order-lg-2 mt-7" lg="3">
                  <div className="card-profile-image">
                    <label htmlFor="upload">
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          !user?.photo
                            ? require("assets/images/voPhoto.png")
                            : user?.photo
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </label>
                  </div>
                  {/* <Button
                    className="mr-4"
                    color="default"
                    style={{ position: "primary", left: 100, top: -30 }}
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >k</Button> */}
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
              <CardBody className="pt-0 pt-md-5">
                <label
                  className="card-profile-stats d-flex justify-content-center mt-md--3"
                  htmlFor="upload"
                >
                  <small style={{ cursor: "pointer" }}>Upload</small>
                </label>
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
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow mb-5">
              <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My Profile</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        size="sm"
                        // onClick={() => toggleEdit(user)}
                        type="submit"
                      >
                        <i class="fas fa-pen"></i> {edit ? "Save" : "Edit"}
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
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
                            name="name"
                            placeholder="Full Name"
                            type="text"
                            disabled={edit ? "" : "true"}
                            innerRef={register({
                              required: true,
                            })}
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
                            name="email"
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
                            name="phone"
                            placeholder="Phone"
                            type="text"
                            disabled={edit ? "" : "true"}
                            innerRef={register({
                              required: true,
                            })}
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
                      <Col lg="12">
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
                            name="city"
                            placeholder="City"
                            type="text"
                            disabled={edit ? "" : "true"}
                            innerRef={register({
                              required: true,
                            })}
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
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
