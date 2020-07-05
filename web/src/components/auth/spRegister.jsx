import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button,
} from "reactstrap";
import { UserContext } from "core/userContext";

const SpRegister = (props) => {
  const context = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      data.type = "sp";
      // console.log(data);
      await context.register(data);
      // props.history.push("/");
      window.location = "/";
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  return (
    <Form role="form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fas fa-building"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Name of Business"
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
            placeholder="Business Email"
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
            <small className="text-danger">Invalid Email Address</small>
          </div>
        )}
      </FormGroup>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fas fa-phone"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Phone Number"
            type="tel"
            name="phone"
            innerRef={register({
              required: true,
            })}
          />
        </InputGroup>
        {errors.phone?.type === "required" && (
          <div className="text-muted font-italic ml-4">
            <small className="text-danger">Phone Number Required</small>
          </div>
        )}
      </FormGroup>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fas fa-map-marker-alt"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="City"
            type="text"
            name="city"
            innerRef={register({
              required: true,
            })}
          />
        </InputGroup>
        {errors.city?.type === "required" && (
          <div className="text-muted font-italic ml-4">
            <small className="text-danger">City Required</small>
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
              id="customCheckRegistersp"
              type="checkbox"
              name="agree"
              ref={register({ required: true })}
            />
            <label
              className="custom-control-label"
              htmlFor="customCheckRegistersp"
            >
              <span className="text-muted">
                I agree with the{" "}
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </a>
              </span>
            </label>
            {errors.agree?.type === "required" && (
              <div className="text-muted font-italic">
                <small className="text-danger">
                  You must agree with the privacy policy
                </small>
              </div>
            )}
          </div>
        </Col>
      </Row>
      <div className="text-center">
        <Button className="mt-4" color="primary" type="submit">
          Create account
        </Button>
      </div>
    </Form>
  );
};

export default SpRegister;
