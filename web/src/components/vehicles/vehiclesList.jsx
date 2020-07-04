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

class VehiclesList extends Component {
  state = {
    formModal: false,
    id: "hsjhwjsjksis",
    vehicles: [],
  };
  toggleModal = (state) => {
    console.log(55555);
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
                                <VehicleAdd 
                                onToggle={this.toggleModal}
                                onSubmit={this.componentDidMount}
                                />
                              </CardBody>
                            </Card>
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div className=" row m-5">
                      {this.state.vehicles.map((v) => (
                        
                          <Card
                            className="card-stats  bg-secondary col-5  m-1 "
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
