import React, { Component } from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  FormGroup,
  Input,
  CustomInput,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { addVehicle } from "services/vehicleService";

const VehicleAdd = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const id = "hsjhwjsjksis";
  const [brands, setBrands] = useState([
    {
      _id: "dgurhildrdfhshsd87sdr",
      brandName: "Toyota",
      models: [
        { _id: "dguislghsls5h786sh67", modelName: "Vitz", type: "Car" },
        { _id: "dwuislghsls5h786sh67", modelName: "Prius", type: "Car" },
        { _id: "dguisllhsls5h786sh67", modelName: "Hiace", type: "Van" },
        { _id: "dguislghsls5h78ush67", modelName: "Axio", type: "Car" },
      ],
    },
    {
      _id: "dgurhwldgdfhshsd87sdr",
      brandName: "Suzuki",
      models: [
        { _id: "dguislghsls5h786sk67", modelName: "Alto", type: "Car" },
        { _id: "dguislghsls5hd86sh67", modelName: "Swift", type: "Car" },
        { _id: "dguislghkls5h786sh67", modelName: "SX4", type: "Car" },
        { _id: "dguislghrls5h786sh67", modelName: "Every", type: "Lorry" },
      ],
    },
  ]);
  const [brand, setBrand] = useState("");
  const [models, setModels] = useState([]);
  const [type, setType] = useState("");

  
  const onSubmit = async (data) => {
    data.type = type;
    data.ownerId =id;
    try {
      const res = await addVehicle(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeBrand = (e) => {
    brands.forEach((b) => {
      if (b.brandName === e.target.value) {
        setModels(b.models);
      }
      setBrand(b.brandName);
    });
  };

  const onChangeModel = (e) => {
    models.forEach((m) => {
      if (m.modelName === e.target.value) {
        setType(m.type);
      }
    });
  };

  return (
    <Form role="form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <CustomInput
            name="brand"
            type="select"
            className="input-group-alternative"
            onChange={onChangeBrand}
            innerRef={register({ required: true })}
          >
            <option className="input-group-alternative" value="">
              Select Vehicle Brand
            </option>
            {brands.map((b) => (
              <option key={b.brandName} value={b.brandName}>
                {b.brandName}
              </option>
            ))}
          </CustomInput>
        </InputGroup>
        {errors.brand?.type === "required" && (
          <div className="text-muted font-italic ml-4">
            <small className="text-danger">Vehicle Brand Required</small>
          </div>
        )}
      </FormGroup>

      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <CustomInput
            name="model"
            // value={this.state.model}
            type="select"
            className="input-group-alternative"
            onChange={onChangeModel}
            disabled={brand === "" ? "disabled" : ""}
            innerRef={register({ required: true })}
          >
            <option className="input-group-alternative" value="">
              Select Vehicle Model
            </option>
            {models.map((m) => (
              <option key={m.modelName} value={m.modelName}>
                {m.modelName}
              </option>
            ))}
          </CustomInput>
        </InputGroup>
        {errors.model?.type === "required" && (
          <div className="text-muted font-italic ml-4">
            <small className="text-danger">Vehicle Model Required</small>
          </div>
        )}
      </FormGroup>
      <FormGroup className="mb-3">
        <Input
          name="vehicleNo"
          placeholder="Vehicle Registration No"
          type="text"
          className="input-group-alternative text-muted"
          style={{ fontSize: 17 }}
          innerRef={register({ required: true, maxLength: 10 })}
        />
        <InputGroup className="input-group-alternative"></InputGroup>
        {errors.vehicleNo?.type === "required" && (
          <div className="text-muted font-italic ml-4">
            <small className="text-danger">
              Vehicle Registration No Required
            </small>
          </div>
        )}
      </FormGroup>
      <div className="text-center">
        <Button className="my-4" color="primary" type="submit">
          Add My Vehicle
        </Button>
      </div>
    </Form>
  );
};

export default VehicleAdd;
