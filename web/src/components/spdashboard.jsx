import React, { Component } from "react";
import Header from "./shared/header";
import Gallery from "./booking/gallery";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
  Input,
} from "reactstrap";
import { UserContext } from "core/userContext";
import SpViewCalendar from "./calendar/spViewCalendar";
import { addImage } from "services/galleryService";
import { getImages } from "services/galleryService";
import { getSpFinishedAppointments } from "services/bookingService";
import { getRates } from "services/rateService";
import { Rating } from "@material-ui/lab";
import Sentiment from "sentiment";

var sentiment = new Sentiment();

class Dashboard extends Component {
  static contextType = UserContext;
  state = {
    user: {},
    images: [],
    bookingCount: null,
    upload: "",
    ratings: [],
    score: null,
  };

  componentDidMount() {
    this.getImages();
    this.getBookingCount();
    this.getRates();
  }

  async getRates() {
    const userdata = await this.context.currentUser();
    const { data: ratings } = await getRates(userdata.user._id);
    this.setState({ ratings });
    this.satisfactionAnalysis(ratings);
  }

  satisfactionAnalysis = (ratings) => {
    let score = 0;
    ratings.forEach(function (r) {
      const ss = sentiment.analyze(r.review);
      score += ss.score;
    });
    this.setState({ score });
  };

  async getBookingCount() {
    try {
      const userdata = await this.context.currentUser();
      console.log(4444444444444444444, userdata.user._id);
      const b = await getSpFinishedAppointments(this.context.state.user?._id);
      console.log(b.data);
      const bookingCount = b.data.length;
      this.setState({ bookingCount });
    } catch (error) {
      console.log(error);
    }
  }

  async getImages() {
    try {
      const userdata = await this.context.currentUser();
      this.setState(userdata);
      const { data: received } = await getImages(this.context.state.user?._id);
      console.log(received);
      if (received) {
        this.setState({ images: received.images });
      }
    } catch (err) {
      console.log("Error", err);
    }
  }

  uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "servicesgallery");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzwimulaq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log("kk ", file.secure_url);
    const image = { url: file.secure_url };
    this.setState({
      upload: file.secure_url,
    });
    await addImage(this.context.state.user._id, image);
    this.getImages();
  };
  render() {
    // const { items } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0"></h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 600 }}>
                    {/* Page Content */}
                    <Row className="mb-4">
                      <Col lg="6">
                        <Card className="bg-gradient-default">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0 text-white">
                                  Customer Satisfaction
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0 text-white">
                                  {this.state.score > 0 && (
                                    <span>
                                      Excelent <i className="far fa-smile"></i>
                                    </span>
                                  )}
                                  {this.state.score == 0 && (
                                    <span>
                                      Satisfactory{" "}
                                      <i className="far fa-meh"></i>
                                    </span>
                                  )}
                                  {this.state.score < 0 && (
                                    <span>
                                      You have to improve{" "}
                                      <i className="far fa-frown"></i>
                                    </span>
                                  )}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                  <i className="ni ni-active-40" />
                                </div>
                              </Col>
                            </Row>
                            {/* <p className="mt-3 mb-0 text-sm">
                              <span className="text-white mr-2">
                                <i className="fa fa-arrow-up" />
                                3.48%
                              </span>
                              <span className="text-nowrap text-light">
                                Since last month
                              </span>
                            </p> */}
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="bg-gradient-primary">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0 text-white">
                                  Bookings Completed
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0 text-white">
                                  {this.state.bookingCount}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                  <i className="ni ni-atom" />
                                </div>
                              </Col>
                            </Row>
                            {/* <p className="mt-3 mb-0 text-sm">
                              <span className="text-white mr-2">
                                <i className="fa fa-arrow-up" />
                                3.48%
                              </span>
                              <span className="text-nowrap text-light">
                                Since last month
                              </span>
                            </p> */}
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <Row>
                          <Col md="2">
                            <h3>Gallery</h3>
                          </Col>
                          <Input
                            style={{ display: "none" }}
                            className="form-control-alternative"
                            placeholder="Upload the image"
                            type="file"
                            name="file"
                            id="upload"
                            onChange={(e) => this.uploadImage(e)}
                          />
                          <Col>
                            <Button
                              color="default"
                              className="mb-2"
                              size="sm"
                              htmlFor="upload"
                            >
                              <label htmlFor="upload" className="p-1 mb-0">
                                + Add Photo
                              </label>
                              {this.state.upload && (
                                <i className="fas fa-check-circle fa-2x"></i>
                              )}
                            </Button>
                          </Col>
                        </Row>
                        <Gallery images={this.state.images} />
                        <Col className="ml-0 pl-0">
                          <div className="mt-3">
                            <h2>Reviews</h2>
                            {this.state.ratings.map((r) => (
                              <div className="" key={r._id}>
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
                      </Col>
                      <Col>
                        <div>
                          <h3 className="ml-5">Calendar</h3>
                          <SpViewCalendar />
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

export default Dashboard;
