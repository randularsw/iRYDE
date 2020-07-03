import React, { Component } from "react";
import Header from "../shared/header";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  CardTitle,
  Col,
  Button,
  Modal,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Input,
  CustomInput,
} from "reactstrap";
import VehicleAdd from "./vehicleAdd";
import { getVehicles } from "services/vehicleService";
import { Link } from "react-router-dom";

class VehiclesList extends Component {
  state = {
    defaultModal: false,
    id: "hsjhwjsjksis",
    vehicles: [],
  };
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  async componentDidMount() {
    try {
      const { data: vehicles } = await getVehicles(this.state.id);
      this.setState({ vehicles });
    } catch (error) {
      console.log("err", error);
    }
  }
  getType(t) {
    let type = "fas fa-";
    if (t === "Bike") {
      type += "biking";
    } else if (t === "Car") {
      type += "car";
    } else if (t === "Lorry") {
      type += "forklift";
    } else if (t === "Van") {
      type += "shuttle-van";
    }
    return type;
  }
  render() {
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow ">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">My Vehicles</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <div className="row">
                      <div className="col-10"></div>
                      <div className="col">
                        <Button
                          color="default"
                          type="button"
                          onClick={() => this.toggleModal("formModal")}
                        >
                          + ADD
                        </Button>

                        <Modal
                          className="modal-dialog-centered"
                          size="sm"
                          isOpen={this.state.formModal}
                          toggle={() => this.toggleModal("formModal")}
                        >
                          <div className="modal-body p-0">
                            <Card className="bg-secondary shadow border-0">
                              <CardHeader className="bg-transparent">
                                <div className="text-muted text-center ">
                                  <h1>Add your vehicle</h1>
                                </div>
                              </CardHeader>
                              <CardBody className="px-lg-5 py-lg-5">
                                <VehicleAdd />
                              </CardBody>
                            </Card>
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div className=" row m-5">
                      {this.state.vehicles.map((v) => (
                        <div className="col-6 mb-3">
                          <Card
                            className="card-stats mb-4 mb-lg-0 bg-secondary"
                            key={v._id}
                          >
                            <CardBody>
                              <Row>
                                <div className="col-3">
                                  <small className=" text-muted ">
                                    Vehicle Brand
                                  </small>
                                  <br />
                                  <span className="h3 font-weight-bold mb-0 m-0">
                                    {v.brand}
                                  </span>
                                </div>
                                <div className="col-3">
                                  <small className=" text-muted mb-0">
                                    Vehicle Model
                                  </small>
                                  <br />
                                  <span className="h3 font-weight-bold  m-0">
                                    {v.model}
                                  </span>
                                </div>
                                <div className="col-3">
                                  <small className=" text-muted m-0">
                                    Vehicle No
                                  </small>
                                  <br />
                                  <span className="h3 font-weight-bold  m-0">
                                    {v.vehicleNo}
                                  </span>
                                </div>
                                <div className="col-1">
                                  <div className="icon icon-shape bg-default text-white rounded-circle shadow">
                                    <Link><i className={this.getType(v.type)} /></Link>
                                  </div>
                                </div>
                              </Row>
                            </CardBody>
                          </Card>
                        </div>
                      ))}
                      {/*                       
                      <div className="col-6 ">
                        <Card className="card-stats mb-4 mb-lg-0 bg-secondary">
                          <CardBody>
                            <Row>
                              <div className="col-3">
                                <small className=" text-muted ">
                                  Vehicle Brand
                                </small>
                                <br />
                                <span className="h3 font-weight-bold mb-0 m-0">
                                  Honda
                                </span>
                              </div>
                              <div className="col-3">
                                <small className=" text-muted mb-0">
                                  Vehicle Model
                                </small>
                                <br />
                                <span className="h3 font-weight-bold  m-0">
                                  TPS
                                </span>
                              </div>
                              <div className="col-3">
                                <small className=" text-muted m-0">
                                  Vehicle No
                                </small>
                                <br />
                                <span className="h3 font-weight-bold  m-0">
                                  DW-4590
                                </span>
                              </div>
                              <div className="col-1">
                                <div className="icon icon-shape bg-default text-white rounded-circle shadow">
                                  <i className="fas fa-biking" />
                                </div>
                              </div>
                            </Row>
                          </CardBody>
                        </Card>
                      </div>
                     */}
                    </div>
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

export default VehiclesList;
