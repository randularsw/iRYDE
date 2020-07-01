import React, { Component } from "react";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button,
  Modal,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import Header from "../shared/header";
import { getServiceProvider } from "services/userService";
import { Rating } from "@material-ui/lab";
import Datetime from "react-datetime";

class serviceProviderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

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
                    <div className="col-1">
                      <img
                        src={this.state.logo}
                        style={{ width: 100, height: 50 }}
                      />
                    </div>
                    <div className="col-6 m-0">
                      <h3 className=" mb-0" style={{ fontSize: 30 }}>
                        {this.state.name}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <div className="col-5">
                      
                      <div className="mb-2">
                        <img
                          src={this.state.profileImage}
                          style={{ width: 520, height: 300 }}
                        />
                      </div> 
                      <div className="">
                      <Button block color="default" size="lg" type="button" onClick={this.onBooking}>
                        Book Now
                      </Button>
                        </div>
                      
                        <Col md="4">
                          <Modal
                            className="modal-dialog-centered"
                            size="sm"
                            isOpen={this.state.formModal}
                            toggle={() => this.toggleModal("formModal")}
                          >
                            <div className="modal-body p-0">
                              <Card className="bg-secondary shadow border-0">
                                <CardHeader className="bg-transparent ">
                                  <div className="text-muted text-center mt-2 mb-3">
                                    <h1>Online Service Booking</h1>
                                  </div>
                                </CardHeader>
                                <CardBody className="px-lg-5 py-lg-5">
                                  <div className="text-center text-muted mb-4">
                                    <img
                                      src={this.state.logo}
                                      style={{ width: 200, height: 100 }}
                                    />
                                  </div>
                                  <Form role="form">
                                  <FormGroup>
                                      <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                      >
                                        Select Your Vehicle
                                      </label>
                                      <Input
                                        placeholder="Select your vehicle"
                                        type="select"
                                      >
                                        <option>Toyota AM1235</option>
                                        <option>2</option>
                                        <option>3</option>
                                      </Input>
                                    </FormGroup>
                                    <FormGroup>
                                      <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                      >
                                        Select Service
                                      </label>
                                      <Input
                                        placeholder="Select your vehicle"
                                        type="select"
                                      >
                                        <option>Oil Change</option>
                                        <option>2</option>
                                        <option>3</option>
                                      </Input>
                                    </FormGroup>
                                    <FormGroup>
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Datetime
                                      inputProps={{
                                        placeholder: "Date Picker Here",
                                      }}
                                      timeFormat={true}
                                    />
                                  </InputGroup>
                                </FormGroup>
                                    
                                    <div className="text-center">
                                      <Button
                                        className="my-4"
                                        color="primary"
                                        type="button"
                                      >
                                        Submit
                                      </Button>
                                    </div>
                                  </Form>
                                </CardBody>
                              </Card>
                            </div>
                          </Modal>
                        </Col>
                      
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
