import React, { useContext, useState } from "react";
// reactstrap components
import {
  Button,
  Card,
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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "core/userContext";

const Login = (props) => {
  const context = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onSubmit = async (data) => {
    try {
      const d = await context.login(data);
      if (d._id) {
        // props.history.push("/");
        if (d.type == "vo") props.history.push("/");
        if (d.type == "sp") props.history.push("/dashboard");
        if (d.type == "ad") props.history.push("/admin/vehicleType");
      }
      if (d.data == "Email doesn't exist") {
        setEmailError(d.data);
      }
      if (d.data == "Invalid password") {
        setPasswordError(d.data);
      }
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  const resetEmailError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const resetPasswordError = () => {
    setPasswordError("");
  };

  return (
    <>
      <Header />
      <div className="justify-content-center row mt--7 ml-0 mr-0">
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0 pt-3">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-2">
                <small>Login with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
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
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/facebook.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Facebook</span>
                </Button>
              </div>
            </CardHeader> */}
            <CardBody className="px-lg-5">
              <div className="text-center text-muted pt-4 mb-5">
                <small>Login with credentials</small>
              </div>
              <Form role="form" onSubmit={handleSubmit(onSubmit)}>
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
                      onChange={resetEmailError}
                      innerRef={register({
                        required: true,
                      })}
                    />
                  </InputGroup>
                  {errors.email?.type === "required" && (
                    <div className="text-muted font-italic ml-4">
                      <small className="text-danger">Email Required</small>
                    </div>
                  )}
                  {emailError && (
                    <div className="text-muted font-italic ml-4">
                      <small className="text-danger">{emailError}</small>
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
                      onChange={resetPasswordError}
                      innerRef={register({ required: true })}
                    />
                  </InputGroup>
                  {errors.password?.type === "required" && (
                    <div className="text-muted font-italic ml-4">
                      <small className="text-danger">Password Required</small>
                    </div>
                  )}
                  {passwordError && (
                    <div className="text-muted font-italic ml-4">
                      <small className="text-danger">{passwordError}</small>
                    </div>
                  )}
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3 mb-5">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                // onClick={(e) => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <Link
                className="text-light"
                to="/auth/register"
                // onClick={(e) => e.preventDefault()}
              >
                <small>Create new account</small>
              </Link>
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};

export default Login;
