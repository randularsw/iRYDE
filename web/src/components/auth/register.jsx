import React from "react";
import { useForm } from "react-hook-form";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import Header from "components/shared/header";

const Register = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // await context.register(data);
      // props.history.push("/");
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  return (
    <>
      <Header />
      <div className="justify-content-center row mt--7 ml-0 mr-0">
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0 mb-7">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Register with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    {/* <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    /> */}
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    {/* <img
                      alt="..."
                      src={require("assets/img/icons/common/facebook.svg")}
                    /> */}
                  </span>
                  <span className="btn-inner--text">Facebook</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or login with credentials</small>
              </div>
              <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      name="name"
                      innerRef={register({
                        required: true,
                      })}
                    />
                  </InputGroup>
                  {errors.name?.type === "required" && (
                    <div className="text-muted font-italic ml-4">
                      <small className="text-danger">Name Required</small>
                    </div>
                  )}
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-envelope"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      name="email"
                      innerRef={register({
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        },
                      })}
                    />
                  </InputGroup>
                  {errors.email?.type === "required" && (
                    <div className="text-muted font-italic ml-4">
                      <small className="text-danger">Email Required</small>
                    </div>
                  )}
                  {errors.email?.type === "pattern" && (
                    <div className="text-muted font-italic ml-4">
                      <small className="text-danger">
                        Invalid Email Address
                      </small>
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-key"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      innerRef={register({ required: true, minLength: 6 })}
                    />
                  </InputGroup>
                  {errors.password?.type === "required" && (
                    <div className="text-muted font-italic ml-4">
                      <small className="text-danger">Password Required</small>
                    </div>
                  )}
                  {errors.password?.type === "minLength" && (
                    <div className="text-muted font-italic ml-4">
                      <small className="text-danger">
                        Password should have minimum 6 charactors
                      </small>
                    </div>
                  )}
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Register;
