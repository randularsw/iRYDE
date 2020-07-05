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
import { sp } from "../../services/userService";

class serviceProviderList extends Component {
  state = {
    serviceProviders: [],
  };

  async componentDidMount() {
    try {
      // const serviceProviders = await getServiceProviders();
      const serviceProviders = await sp();
      this.setState({
        serviceProviders,
      });
    } catch (err) {
      console.log("Error", err);
    }
  }

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
                  <h3 className=" mb-0">Service Providers</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 300 }}>
                    {/* Page Content */}
                    <b>Service Centers</b>
                    <div className="m-5 mt-0">
                      <Row>
                        {this.state.serviceProviders.map((serviceProvider) => (
                          <Card
                            key={serviceProvider._id}
                            style={{
                              width: "16rem",
                              height: 230,
                              marginLeft: 5,
                              marginRight: 5,
                            }}
                          >
                            <CardImg
                              alt="..."
                              style={{ height: 170}}
                              src={require("assets/images/spPhoto.png")}
                              top
                            />
                            <CardBody className="p-2">
                              <CardTitle>
                                <Link
                                  to={`/service-provider/${serviceProvider._id}`}
                                >
                                  {serviceProvider.name}
                                </Link>
                                <br />
                                <Rating
                                  name="half-rating"
                                  defaultValue={2.5}
                                  precision={0.5}
                                  size="small"
                                  readOnly
                                />
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
        </Container>
      </>
    );
  }
}

export default serviceProviderList;
