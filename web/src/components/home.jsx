import React, { Component } from "react";
import Header from "./shared/header";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  CardImg,
} from "reactstrap";
import ServiceProviderList from "./booking/serviceProviderList";
import HomeCarousel from "./shared/homeCarousel";
import { UserContext } from "core/userContext";

class Home extends Component {
  static contextType = UserContext;
  state = {
    items: [],
  };

  async componentDidMount() {
    const userData = await this.context.currentUser();
    if (userData?.user?.type === "sp") {
      this.props.history.push("/profile");
      // window.location = "/";
    } else if (userData?.user?.type === "ad") {
      this.props.history.push("/admin/vehicleType");
      // window.location = "/";
    }
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
              {/* {!isAuthenticated && <HomeCarousel />} */}
            </div>
          </Row>
          <ServiceProviderList />
        </Container>
      </>
    );
  }
}

export default Home;
