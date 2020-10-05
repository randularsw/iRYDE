import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { Media, Table } from "reactstrap";
import { Button } from "reactstrap";
import { FormGroup, Form, Input, Col } from "reactstrap";
// import { addvehicle } from "./vehicleBrand";
import axios from "axios";
import { Link } from "react-router-dom";
import { ModelsList } from "./modelList";
import { ModelsAdd } from "./vModelAdd";
import { addVehicleBrand } from "services/vehicleTypeService";
import { getVehicleBrands } from "services/vehicleTypeService";
import { deleteVehicleBrand } from "services/vehicleTypeService";
import { addVehicleModel } from "services/vehicleTypeService";
import { deleteVehicleModel } from "services/vehicleTypeService";

class VehicleType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      // currentItem: {
      //   text: "",
      //   key: "",
      // },
      // listModels: ["hi"],
      // currentmodel:{
      //   text:"",
      //   key:"",
      // }
    };

    this.addItem = this.addItem.bind(this);
    // this.addModel = this.addModel.bind(this);
  }
  // modelList() {
  //   return this.state.models.map((currentmodel) => {
  //     return (
  //       <ModelsList
  //         obj={currentmodel}
  //         addModel={this.addModel}
  //         key={currentmodel._id}
  //       />
  //     );
  //   });
  // }
  //add vehicle brand

  addItem(e) {
    try {
      e.preventDefault();

      console.log(this.itemInputValue.value);

      const { listItems } = this.state;
      const vehicleType = this.itemInputValue.value;

      if (listItems.includes(vehicleType)) {
        alert("The vehicle brand is already included ");
      } else {
        if (vehicleType !== "") {
          this.setState({
            message: "",
          });
          addVehicleBrand({ brand: vehicleType });
          this.getVehicleTypes();
        }
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  componentDidMount() {
    this.getVehicleTypes();
  }

  async getVehicleTypes() {
    try {
      const vehicleTypes = await getVehicleBrands();
      console.log(vehicleTypes);
      this.setState({
        listItems: vehicleTypes.data,
      });
    } catch (err) {
      console.log("Error", err);
    }
  }
  removeItem = async (id) => {
    try {
      const res = await deleteVehicleBrand(id);
      this.getVehicleTypes();
      console.log(res);
    } catch (error) {
      console.log("Error", error);
    }
  };

  //////////////////
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
  //         addVehicleModel({ model: vehicleModel });
  //         this.getVehicleTypes();
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // }

  // componentDidMount() {
  //   this.getVehicleTypes();
  // }

  // async getVehicleTypes() {
  //   try {
  //     const vehicleModels = await this.getVehicleTypes();
  //     console.log(vehicleModels);
  //     this.setState({
  //       listModels: vehicleModels.data,
  //     });
  //   } catch (err) {
  //     console.log("Error", err);
  //   }
  // }

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
    const { listItems, listModels, item, message } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Vehicle Brands, Models & Types</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}

                    <Form onSubmit={this.addItem}>
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <Input
                              innerRef={(node) => (this.itemInputValue = node)}
                              name="itemName"
                              className="is-valid"
                              type="text"
                              id="vehicleType"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <Button color="primary" size="lg" type="submit">
                            Add new vehicle brand
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                    {(message !== "" || listItems.length == 0) && (
                      <p className="message test-danger">{message}</p>
                    )}
                    {listItems.length > 0 && (
                      <Table className="align-items-center" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Vehicle Brand</th>
                            <th scope="col">Vehicle Model & Type</th>

                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          {listItems.map((item) => {
                            return (
                              <tr key={item._id}>
                                <th scope="row" col-md-2>
                                  <Media className="align-items-center">
                                    <Media>
                                      <span className="mb-0 text-sm">
                                        {item.brand}
                                      </span>
                                    </Media>
                                  </Media>
                                </th>
                                <td>
                                  <Link
                                    classname="btn btn-primary"
                                    to={`/admin/modelsAdd/${item._id}`}
                                  >
                                    Add Model
                                  </Link>
                                </td>
                                <td></td>

                                <td>
                                  <Button
                                    onClick={(e) => this.removeItem(item._id)}
                                    color="danger"
                                    outline
                                    type="button"
                                  >
                                    <i
                                      class="fa fa-trash"
                                      aria-hidden="true"
                                    ></i>
                                    Delete Brand
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

export default VehicleType;
