import React, { Component } from 'react';
import { Form, InputGroup, InputGroupAddon, InputGroupText, Button,FormGroup,Input, CustomInput } from 'reactstrap';


class VehicleAdd extends Component {
    state = {  }
    render() { 
        return (
          
          <Form role="form">
          <FormGroup className="mb-3">
            <InputGroup className="input-group-alternative">
              <CustomInput
                type="select"
                className="input-group-alternative"
              >
                <option
                  className="input-group-alternative"
                  value=""
                >
                  Select Vehicle Class
                </option>
                <option className="input-group-alternative">
                  Car
                </option>
                <option className="input-group-alternative">
                  Van
                </option>
                <option className="input-group-alternative">
                  Lorry
                </option>
                <option className="input-group-alternative">
                  Bike
                </option>
              </CustomInput>
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-3">
            <InputGroup className="input-group-alternative">
              <CustomInput
                type="select"
                className="input-group-alternative"
              >
                <option
                  className="input-group-alternative"
                  value=""
                >
                  Select Vehicle Brand
                </option>
                <option className="input-group-alternative">
                  2
                </option>
                <option className="input-group-alternative">
                  3
                </option>
              </CustomInput>
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-3">
            <InputGroup className="input-group-alternative">
              <CustomInput
                value=""
                type="select"
                className="input-group-alternative"
              >
                <option className="input-group-alternative">
                  Select Vehicle Model
                </option>
                <option className="input-group-alternative">
                  2
                </option>
                <option className="input-group-alternative">
                  3
                </option>
              </CustomInput>
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-3">
            <Input
              placeholder="Vehicle Registration No"
              type="text"
              className="input-group-alternative text-muted"
              style={{ fontSize: 17 }}
            />
            <InputGroup className="input-group-alternative">
            </InputGroup>
          </FormGroup>
          <div className="text-center">
            <Button
              className="my-4"
              color="primary"
              type="button"
            >
              Add My Vehicle
            </Button>
          </div>
        </Form>
      
        );
    }
}
 
export default VehicleAdd;