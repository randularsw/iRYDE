import React, { Component } from "react";
import Header from "../shared/header";

import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { Media, Table } from "reactstrap";
import { Button } from "reactstrap";
import { FormGroup, Form, Input, Col } from "reactstrap";
// import { addvehicle } from "./";
import axios from "axios";
import { Link } from "react-router-dom";
// import { ModelsList } from "./modelList";

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
      listModels:[],
      type:"",
      model:"",
      model:["a","b","c"],
      vehicles:[],
      arrayIndex:0
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

  sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}
  onSubmit(e){
    e.preventDefault();

    const vehicle={
      model:this.state.model,
      type:this.state.type,
    };
    console.log(vehicle);
    addVehicleModel(this.props.match.params.id,vehicle);
    this.sleep(500).then(() => {
      this.getVehicleModelsNew(this.state.arrayIndex)
    })   
    
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
    var arrayIndex = this.props.location.arrayIndex
    this.setState({
      arrayIndex:arrayIndex
    })
    this.getVehicleModels();
    this.getVehicleModelsNew(arrayIndex)
    
  }

  async getVehicleModels() {
    try {
      const model = await getVehicleModels();
      console.log(model);
      this.setState({
        vehicles: model.data,
        // type:type.data,
      });
    } catch (err) {
      console.log("Error", err);
    }
  }


  async getVehicleModelsNew(arrayIndex) {
    try {
      var model = await getVehicleBrands();
      // console.log(model.data[0].models);
      this.setState({
        listModels: model.data[arrayIndex].models,
        // type:type.data,
      });
    } catch (err) {
      console.log("Error", err);
    }
    console.log(this.state.listModels)
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
                   
                    {(message !== "" || listModels.length == 0) && (
                      <p className="message test-danger">{message}</p>
                    )}

                    {listModels.length > 0 && (
                    <Table className="align-items-center" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Vehicle Model</th>
                            <th scope="col">Vehicle Type</th>

                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          {listModels.map((item) => {
                            return (
                              <tr key={item._id}>
                                <td scope="row" col-md-2>
                                  <Media className="align-items-center">
                                    <Media>
                                      <span className="mb-0 text-sm">
                                      
                                      {item.model}
                                      </span>
                                    </Media>                                    
                                  </Media>
                                </td>
                                
                                <td scope="row" col-md-2>
                                  <Media className="align-items-center">
                                    <Media>
                                      <span className="mb-0 text-sm">
                                      {item.type}
                                      </span>
                                    </Media>
                                  </Media>
                                </td>

                                <td>
                                  <Button
                                    // onClick={(e) => this.removeItem(item._id)}
                                    
                                    color="danger"
                                    outline
                                    type="button"
                                  >
                                    <i
                                      class="fa fa-trash"
                                      aria-hidden="true"
                                    ></i>
                                    Delete
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    )}
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