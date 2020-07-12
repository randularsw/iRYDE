import React, { Component } from "react";
import Header from "../shared/header";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button,
  Modal,
} from "reactstrap";
import VehicleAdd from "./vehicleAdd";
import { getVehicles } from "services/vehicleService";
import { Link } from "react-router-dom";
import { UserContext } from "core/userContext";

class VehiclesList extends Component {
  static contextType = UserContext;
  state = {
    formModal: false,
    vehicles: [],
  };
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  async componentDidMount() {
    try {
      const userData = await this.context.currentUser();
      const { data: vehicles } = await getVehicles(userData.user?._id);
      this.setState({ vehicles });
    } catch (error) {
      console.log("err", error);
    }
  }
  handleAddVehicle = (vehicle) => {
    const { vehicles } = this.state;
    vehicles.push(vehicle);
    this.setState({ vehicle });
  };
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
              <Card className=" shadow m-0 ">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">My Vehicles</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <div className="row m-0 mb-2">
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
                                <VehicleAdd
                                  onToggle={this.toggleModal}
                                  onSubmit={this.componentDidMount}
                                  onAddVehicle={this.handleAddVehicle}
                                />
                              </CardBody>
                            </Card>
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div className=" row m-0 p-0">
                      {this.state.vehicles.map((v) => (
                        <Card
                          className="card-stats  bg-secondary col-5 m-1 p-0 "
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
                                <Link to={`/vehicle/${v._id}`}>
                                  <div className="icon icon-shape bg-default text-white rounded-circle shadow">
                                    <i className={this.getType(v.type)} />
                                  </div>
                                </Link>
                              </div>
                            </Row>
                          </CardBody>
                        </Card>
                      ))}
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
