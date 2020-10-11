import React, { Component } from "react";
import Header from "../shared/header";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { getServiceProviders } from "../../services/userService";
import AvgRating from "./avgRating";

class serviceProviderList extends Component {
  state = {
    serviceProviders: [],
  };

  async componentDidMount() {
    try {
      const res = await getServiceProviders();
      //console.log('wwwwwwwwwwwwwwwwwwwwwww',res.data);
      this.setState({
        serviceProviders: res.data,
      });
    } catch (err) {
      console.log("Error", err);
    }
  }

  render() {
    // const { items } = this.state;
    return (
      <>
        {/* <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
        <Row>
          <div className=" col">
            <Card className=" shadow">
              <CardHeader className=" bg-transparent">
                <h3 className=" mb-0">Service Providers</h3>
              </CardHeader>
              <CardBody>
                <div style={{ minHeight: 300 }}>
                  {/* Page Content */}
                  {/* <b>Service Centers</b> */}
                  <div className="mx-5 mt-0">
                    <Row>
                      {this.state.serviceProviders?.map((serviceProvider) => (
                        <Card
                          key={serviceProvider?._id}
                          style={{
                            width: "16rem",
                            height: 240,
                            marginLeft: 5,
                            marginRight: 5,
                          }}
                        >
                          <Link
                            to={`/service-provider/${serviceProvider?._id}`}
                          >
                            <CardImg
                              alt="..."
                              style={{ height: 180 }}
                              src={require("assets/images/spPhoto.png")}
                              top
                            />
                          </Link>

                          <CardBody className="p-2">
                            <CardTitle>
                              <Link
                                to={`/service-provider/${serviceProvider?._id}`}
                                className="text-default"
                              >
                                {serviceProvider?.name}
                              </Link>

                              <br />
                              <Row className="pl-3">
                                <div className="col-7 m-0 p-0">
                                  <small className="text-gray">
                                    <i class="fas fa-map-marker-alt pr-2"></i>
                                    {serviceProvider?.city}
                                  </small>
                                </div>
                                <div className="col m-0 p-0">
                                  <AvgRating sp={serviceProvider?._id} />
                                </div>
                              </Row>
                            </CardTitle>
                          </CardBody>
                        </Card>
                      ))}
                    </Row>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Row>
        {/* </Container> */}
      </>
    );
  }
}

export default serviceProviderList;
