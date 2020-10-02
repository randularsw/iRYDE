import React, { Component } from "react";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Col,
  UncontrolledCollapse,
} from "reactstrap";
import Header from "../shared/header";
// import { getServiceProvider } from "services/userService";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { getUser } from "services/userService";
import { getServices } from "services/serviceService";
import ServiceProviderBooking from "./serviceProviderBooking";
import { UserContext } from "core/userContext";
import { getVehicle } from "services/vehicleService";
import { getVehicles } from "services/vehicleService";
import { getUnavailableDates } from "services/unavailableDatesService";

class serviceProviderDetails extends Component {
  static contextType = UserContext;
  state = {
    defaultModal: false,
    details: {},
    services: [],
    formModal: false,
    vehicles: [],
    user: [],
    unavailableDates: [],
    daysDiff: [],
  };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  async componentDidMount() {
    try {
      const { data: details } = await getUser(this.props.match.params.id);
      const { data: services } = await getServices(this.props.match.params.id);
      this.setState({ details, services });
      const userData = await this.context.currentUser();
      this.setState({ user: userData.user });
      const { data: vehicles } = await getVehicles(userData.user?._id);
      this.setState({ vehicles });
      const { data: unavailableDates } = await getUnavailableDates(
        this.state.details._id
      );
      //get unavailable dates
      this.setState({ unavailableDates:unavailableDates[0].dates });
      //console.log(this.state.unavailableDates);
      this.state.unavailableDates.map(d=>{
        const unavailable = new Date(d.date);
        //console.log(unavailable);
        const today = new Date().toISOString();
        const diff = new Date(unavailable).getTime() - new Date(today).getTime(); // Gives difference between 2 days
        const diffDates = Math.round(diff / (1000 * 3600 * 24)); // convert it to np of days format
        this.state.daysDiff.push(diffDates + 1);
      });
      //console.log(this.state.daysDiff);

    } catch (err) {
      console.log("Error", err);
    }
  }



  onBooking = () => {
    this.props.history.push(`/booking/${this.state._id}`);
  };

  render() {
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <div className="row">
                    <div className="col-6 m-0">
                      <h3 className=" mb-0">{this.state.details.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <Row
                      className="container bg-default"
                      style={{ height: 200, margin: 1 }}
                    >
                      <div className="col-8"></div>
                      <div className="col ">
                        <h1 className="text-white pt-5">
                          {this.state.details.name}
                        </h1>
                        <h3 className="text-white ">
                          {this.state.details.city}
                        </h3>
                        <div className="m-0 p-0 row">
                          <div className="col-7 m-0 p-0">
                            <Rating
                              name="half-rating"
                              defaultValue={3}
                              precision={0.5}
                              size="large"
                              readOnly
                            />
                          </div>
                          <div className="col m-0 p-0">
                            {/* <Button size="sm" color="primary" onClick={this.onBooking}>
                              Book Now
                            </Button> */}
                            <Button
                              size="sm"
                              color="primary"
                              onClick={() => this.toggleModal("formModal")}
                            >
                              Book Now
                            </Button>
                            <Modal
                              className="modal-dialog-centered"
                              size="sm"
                              isOpen={this.state.formModal}
                              toggle={() => this.toggleModal("formModal")}
                            >
                              <div className="modal-body p-0">
                                <Card
                                  className="bg-secondary shadow border-0 p-3"
                                  style={{ width: 600 }}
                                >
                                  <CardHeader className="bg-transparent">
                                    Online Service Booking
                                  </CardHeader>
                                  <CardBody className="">
                                    <ServiceProviderBooking
                                      vehicles={this.state.vehicles}
                                      user={this.state.user}
                                      sp={this.state.details}
                                      services={this.state.services}
                                      unavailableDates={
                                        this.state.daysDiff
                                      }
                                      onToggle={this.toggleModal}
                                    />
                                  </CardBody>
                                </Card>
                              </div>
                            </Modal>
                          </div>
                        </div>
                      </div>
                    </Row>

                    <div className="mt-5 ml-3">
                      <h2>Our Services</h2>
                      <div className="ml-4">
                        {this.state.services.map((s) => (
                          <p key={s._id}>
                            <Link className="text-gray">{s.servicename}</Link>
                          </p>
                        ))}
                      </div>
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

export default serviceProviderDetails;
