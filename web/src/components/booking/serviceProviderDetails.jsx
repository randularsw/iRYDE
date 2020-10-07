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
  Collapse,
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
import Gallery from "./gallery";
import ServiceSummary from "./serviceSummary";
import { getPromotions } from "services/promotionService";
import { getRates } from "services/rateService";
import { getImages } from "services/galleryService";

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
    promotions: [],
    ratings: [],
    avgRate: 0,
    images: [],
    upload: "",
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
      //get promotions
      const { data: promotions } = await getPromotions(
        this.props.match.params.id
      );
      this.setState({ promotions });
      //console.log("protions", this.state.promotions);
      //get gallery
      const { data: received } = await getImages(this.state.details?._id);
      console.log(received);
      if (received) {
        this.setState({ images: received.images });
      }
      //get unavailable dates
      this.setState({ unavailableDates: unavailableDates[0].dates });
      this.state.unavailableDates.map((d) => {
        const unavailable = new Date(d.date);
        const today = new Date().toISOString();
        const diff =
          new Date(unavailable).getTime() - new Date(today).getTime(); // Gives difference between 2 days
        const diffDates = Math.round(diff / (1000 * 3600 * 24)); // convert it to np of days format
        this.state.daysDiff.push(diffDates);
      });

      //get ratings
      const { data: ratings } = await getRates(this.props.match.params.id);
      this.setState({ ratings });
      this.getAverageRate();
    } catch (err) {
      console.log("Error", err);
    }
  }

  onBooking = () => {
    this.props.history.push(`/booking/${this.state._id}`);
  };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  getAverageRate() {
    let total = 0;
    if (this.state.ratings.length > 0) {
      this.state.ratings.map((r) => {
        total = total + r.rate;
      });
      let avgRate = total / this.state.ratings.length;

      this.setState({ avgRate });
    }
  }

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
                      <div className="col-8 m-2">
                        {/* <div className="card-profile-image"> */}
                        {/* <label htmlFor="upload"> */}
                        <img
                          alt="..."
                          className="rounded-circle"
                          height="180"
                          src={
                            !this.state.details?.photo
                              ? require("assets/images/voPhoto.png")
                              : this.state.details?.photo
                          }
                          style={{ cursor: "pointer" }}
                        />
                        {/* </label> */}
                        {/* </div> */}
                      </div>
                      <div className="col ">
                        <h1 className="text-white pt-5">
                          {this.state.details.name}
                        </h1>
                        <h3 className="text-white ">
                          {this.state.details.city}
                        </h3>
                        <div className="m-0 p-0 row">
                          <div className="col-7 m-0 p-0">
                            {console.log(this.state.avgRate)}
                            <Rating
                              value={this.state.avgRate}
                              size="large"
                              readOnly
                              precision={0.5}
                            />
                          </div>
                          <div className="col m-0 p-0">
                            {/* <Button size="sm" color="primary" onClick={this.onBooking}>
                              Book Now
                            </Button> */}
                            {this.context.state.user?.type == "vo" && (
                              <Button
                                size="sm"
                                color="primary"
                                onClick={() => this.toggleModal("formModal")}
                              >
                                Book Now
                              </Button>
                            )}
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
                                      unavailableDates={this.state.daysDiff}
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

                    <Row className="ml-3">
                      <div className=" col-6">
                        <div className="mt-5 ">
                          <h2>Our Services</h2>
                          <div className="ml-4">
                            {this.state.services.map((s) => (
                              <ServiceSummary s={s} />
                            ))}
                          </div>
                        </div>
                        <div style={{}} className="mt-5">
                          <h2>Photos</h2>
                          {this.state.images.length == 0 && (
                            <p>There are no photos available yet.</p>
                          )}
                          <Gallery images={this.state.images} />
                        </div>
                      </div>
                      <Col>
                        <div className="mt-5 ml-2 ">
                          <h2>Promotions</h2>
                          {this.state.promotions.length == 0 && (
                            <p>There are no promotions available yet.</p>
                          )}
                          {this.state.promotions.map((p) => (
                            <div
                              className="border p-2"
                              style={{ backgroundColor: "#ffff00" }}
                              key={p._id}
                            >
                              <Row>
                                <div className="col ml-2 mr-3">
                                  <h1>{p.title}</h1>
                                </div>
                              </Row>
                              <Row>
                                <small className="ml-4 mr-3">
                                  {p.description}
                                </small>
                              </Row>
                            </div>
                          ))}
                        </div>
                        <div className=" mt-5 ml-2 ">
                          <h2>Hours</h2>
                          <div className=" row ml-1">
                            <div
                              className="col-3 border"
                              style={{ backgroundColor: "#f2f2f2" }}
                            >
                              <small>Sunday</small>
                              <br />
                              <small>Monday</small>
                              <br />
                              <small>Tuesday</small>
                              <br />
                              <small>Wednesday</small>
                              <br />
                              <small>Thursday</small>
                              <br />
                              <small>Friday</small>
                              <br />
                              <small>Saturday</small>
                              <br />
                            </div>
                            <div
                              className="col-5 border"
                              style={{ backgroundColor: "#f2f2f2" }}
                            >
                              <small>08 : 00 AM - 06 : 00 PM</small>
                              <br />
                              <small>08 : 00 AM - 06 : 00 PM</small>
                              <br />
                              <small>08 : 00 AM - 06 : 00 PM</small>
                              <br />
                              <small>08 : 00 AM - 06 : 00 PM</small>
                              <br />
                              <small>08 : 00 AM - 06 : 00 PM</small>
                              <br />
                              <small>08 : 00 AM - 06 : 00 PM</small>
                              <br />
                              <small>08 : 00 AM - 06 : 00 PM</small>
                              <br />
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 ml-2">
                          <h2>Reviews</h2>
                          {this.state.ratings.map((r) => (
                            <div className="ml-2" key={r._id}>
                              <div className="border p-2">
                                <Row>
                                  {/* <div className="col-1 ">
                                  <img
                                    class="avatar border-gray"
                                    src="https://www.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
                                    alt="..."
                                    class="rounded-circle  border"
                                    style={{ width: 30, height: 30 }}
                                  />
                                </div> */}
                                  <div
                                    className="col-7"
                                    style={{ fontWeight: "bold" }}
                                  >
                                    {r.voName}
                                  </div>
                                  <div className="col mt-2">
                                    <Rating
                                      name="size-small"
                                      defaultValue={r.rate}
                                      size="small"
                                      readOnly
                                    />
                                  </div>
                                </Row>
                                <Row>
                                  <small className="ml-3 mr-2 ">
                                    {r.review}
                                  </small>
                                </Row>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>
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
