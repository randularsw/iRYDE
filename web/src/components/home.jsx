import React, { Component } from "react";
import Header from "./shared/header";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  CardImg,
  Button,
  Modal,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Input,
} from "reactstrap";
import ServiceProviderList from "./booking/serviceProviderList";
import HomeCarousel from "./shared/homeCarousel";
import { UserContext } from "core/userContext";
import { Rating } from "@material-ui/lab";
import { getRateModal } from "services/bookingService";
import { addRate } from "services/rateService";

class Home extends Component {
  static contextType = UserContext;
  state = {
    items: [],
    formModal: false,
    stars: 0,
    review: null,
    booking: [],
    user:{},
  };

  async componentDidMount() {
    const userData = await this.context.currentUser();
    if (userData?.user?.type === "sp") {
      this.props.history.push("/about");
      // window.location = "/";
    } else if (userData?.user?.type === "ad") {
      this.props.history.push("/admin/vehicleType");
      // window.location = "/";
    } else {
      //console.log(7777777777777777,userData?.user?._id);
      const result = await getRateModal(userData?.user?._id);
      //console.log(result.data);
      if (result.data.length > 0) {
        console.log(1);
        this.setState({ booking: result.data });
        this.setState({user:userData?.user});
        this.toggleModal("formModal");
      } else {
        console.log(0);
      }
    }
  }

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  change(e) {
    console.log(e);
  }

  onChangeReview(v) {
    console.log(v.target.value);
    this.setState({ review: v.target.value });
  }

  async onSubmit() {
    const rates = {
      rate: this.state.stars,
      review: this.state.review,
      spId:this.state.booking[0].sp,
      voId:this.state.user._id,
      voName:this.state.user.name,
    };
    console.log(rates);
    const res = await addRate(rates);
    this.toggleModal("formModal")
  }

  render() {
    const { user, isAuthenticated } = this.context.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col mb-4">
              {/* <img
                  alt="..."
                  // width={200}
                  src={require("assets/images/w4.jpg")}
                /> */}
              {!isAuthenticated && <HomeCarousel />}
            </div>
          </Row>
          <ServiceProviderList />

          <Modal
            className="modal-dialog-centered"
            size="sm"
            isOpen={this.state.formModal}
            toggle={() => this.toggleModal("formModal")}
            style={{ width: 300 }}
          >
            {this.state.booking.map((b) => (
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0 p-3">
                  <CardHeader className="bg-transparent">{b.spName}</CardHeader>
                  <CardBody className="">
                    <Rating
                      name="size-medium"
                      name="simple-controlled"
                      value={this.state.stars}
                      onChange={(event, newValue) => {
                        this.setState({ stars: newValue });
                      }}
                    />
                    {/* form */}
                    {this.state.stars > 0 && (
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Add your review"
                              type="text"
                              onChange={(val) => this.onChangeReview(val)}
                            />
                          </InputGroup>
                        </FormGroup>

                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={() => this.onSubmit()}
                          >
                            Submit
                          </Button>
                        </div>
                      </Form>
                    )}
                  </CardBody>
                </Card>
              </div>
            ))}
          </Modal>
        </Container>
      </>
    );
  }
}

export default Home;
