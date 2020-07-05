import React, { Component } from "react";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button,
  UncontrolledCollapse,
} from "reactstrap";
import Header from "../shared/header";
// import { getServiceProvider } from "services/userService";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";

class serviceProviderDetails extends Component {
  state = {
    defaultModal: false,
    details: [],
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "LAUGFS CarCare",
    email: "LAUGFSCarCare@gmail.com",
    address: "25/p,pannipitya",
    profileImage:
      "https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2016/11/yimg_09384I-640x338.jpg",
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRku3IvlGnEq7Bn3mlC-vZqrtFu8a-jwXsoqA&usqp=CAU",
    contact: 5556555458,
    ratings: [
      { _id: "1332256", rate: 3, review: "fgtgygyuhuuuuhu" },
      { _id: "1332255", rate: 3, review: "fgtgygyuhuuuuhu" },
    ],
    services: [
      {
        _id: "1332256",
        title: "oil change",
        description: "hghdg hsgysgy hgaygyst",
        image: "assets/images/sp/laugfsCarCare.jpg",
      },
      {
        _id: "1332255",
        title: "oil change",
        description: "dyhujdidokjdi",
        image: "assets/images/sp/laugfsCarCare.jpg",
      },
    ],
  };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  async componentDidMount() {
    try {
      // const {data:details} = await getServiceProvider(this.props.match.params.id);
      // this.setState({details});
      // console.log(this.state.details.username);
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
                      <h3 className=" mb-0">{this.state.name}</h3>
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
                        <h1 className="text-white pt-5">{this.state.name}</h1>
                        <h3 className="text-white ">{this.state.address}</h3>
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
                            <Button size="sm" color="primary">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Row>
                    <div>
                      <h2>Our Services</h2>
                      <div>
                      
                      <Link id="toggler">Oil Change</Link>
                        <UncontrolledCollapse toggler="#toggler">
                          <Card>
                            <CardBody>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nesciunt magni, voluptas debitis similique
                              porro a molestias consequuntur earum odio officiis
                              natus, amet hic, iste sed dignissimos esse fuga!
                              Minus, alias.
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>
                      </div>
                    </div>

                    {/* 
                    <div className="col-5">
                      <div className="mb-2">
                        <img
                          src={this.state.profileImage}
                          style={{ width: 520, height: 300 }}
                        />
                      </div>
                      <div className="">
                        <Button
                          block
                          color="default"
                          size="lg"
                          type="button"
                          onClick={this.onBooking}
                        >
                          Book Now
                        </Button>
                      </div>
                      <div className="mt-2">
                        <Row>
                          <div className="col-8">
                            <Rating
                              name="half-rating"
                              defaultValue={2.5}
                              precision={0.5}
                              size="large"
                              readOnly
                            />
                          </div>
                          <div className="col">
                            <a href="#">Show Reviews</a>
                          </div>
                        </Row>
                      </div>
                    </div>
                    <div className="col"></div>
                     */}
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
