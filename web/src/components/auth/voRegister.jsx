import React from "react";
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

const VoRegister = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
        data.type="vo";
        console.log(data);
      // await context.register(data);
      // props.history.push("/");
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
              id="customCheckRegistervo"
              type="checkbox"
            />
            <label
              className="custom-control-label"
              htmlFor="customCheckRegistervo"
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
  );
};

export default VoRegister;
