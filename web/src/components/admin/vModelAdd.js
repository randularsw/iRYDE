import React, { Component } from "react";
import Header from "../shared/header";

import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { Media, Table } from "reactstrap";
import { Button } from "reactstrap";
import { FormGroup, Form, Input, Col } from "reactstrap";
// import { addvehicle } from "./";
import axios from "axios";
import { Link } from "react-router-dom";
import { ModelsList } from "./modelList";

import { addVehicleBrand } from "services/vehicleTypeService";
import { getVehicleBrands } from "services/vehicleTypeService";
import { deleteVehicleBrand } from "services/vehicleTypeService";
import { addVehicleModel } from "services/vehicleTypeService";
import { deleteVehicleModel } from "services/vehicleTypeService";
import { getVehicleModels } from "services/vehicleTypeService";

class ModelsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // listModels: ["dfgh"],
      // currentmodel:{
      //   text:"",
      //   key:"",
      // },
      brandId:null,
      // listModels:["vitz","swift","corolla"],
      type:"",
      model:"",
      model:["a","b","c"],
      vehicles:[],


    };

    // this.addModel = this.addModel.bind(this);
    this.onChangeModel=this.onChangeModel.bind(this);
    this.onChangeType= this.onChangeType.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  
  onChangeModel(e){
    this.setState({
      model:e.target.value,
    })
   
  }
  
  onChangeType(e){
    this.setState({
      type:e.target.value,
    })

  }

  onSubmit(e){
    e.preventDefault();

    const vehicle={
      model:this.state.model,
      type:this.state.type,
    };
    console.log(vehicle);
    addVehicleModel(this.props.match.params.id,vehicle);
    axios
    .post("http://localhost:4000/vehicleTypes/add/", vehicle)
    .then((res) => console.log(res.data));
  }

  //add vehicle model

  // addModel(e) {
  //   try {
  //     e.preventDefault();
      
  //     console.log(this.modelInputValue.value);
      
  //     const { listModels } = this.state;
  //     const vehicleModel = this.modelInputValue.value;
     
  //     if (listModels.includes(vehicleModel)) {
  //       alert("The vehicle model is already included ");
  //     } else {
  //       if (vehicleModel !== "") {
  //         this.setState({
  //           message: "",
  //         });
  //         addVehicleModel(this.props.match.params.id,{ model: vehicleModel });
  //         // this.getVehicleModels();
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // }

  componentDidMount() {
    this.getVehicleModels();
  }

  async getVehicleModels() {
    try {
      const model = await this.getVehicleModels();
      console.log(model);
      this.setState({
        vehicles: model.data,
        // type:type.data,
      });
    } catch (err) {
      console.log("Error", err);
    }
  }


  // removeModel = async (id) => {

  //   try {
  //     const res = await deleteVehicleModel(id);
  //     this.getVehicleModels();
  //     console.log(res);
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };

  render() {
    const { listModels, item,model, message } = this.state;
    return (
      <>
        <Header /> 
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Vehicle Models & Types </h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}

                    <Form onSubmit={this.onSubmit}>
                      <Row>
                        <Col md="2">
                          <FormGroup>
                            <Input
                              // innerRef={(node) => (this.modelInputValue = node)}
                              name="modelname"
                              className="form-control-alternative"
                              type="text"
                              id="vehicleModel"
                              value={this.state.model}
                              onChange={this.onChangeModel}
                            />
                          </FormGroup>
                        </Col>
                        

                        <Col md="2">
                        <FormGroup>
                          <Input
                            // innerRef={(node) => (this.modelInputValue = node)}
                            name="typename"
                            className="form-control-alternative"
                            type="text"
                            id="vehicleType"
                            value={this.state.type}
                            onChange={this.onChangeType}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <Button color="primary" size="lg" type="submit">
                          Add 
                        </Button>
                        <Link
                        to="/admin/vehicleType"
                        className="btn btn-danger ml-2"
                      >
                        Cancle
                      </Link>
                      </Col>
                      
                      </Row>
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

export default ModelsAdd;
