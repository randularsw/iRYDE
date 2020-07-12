import React, { Component } from "react";
import Header from "../shared/header";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Button,
} from "reactstrap";

class PromotionsView extends Component {
  state = {
    items: [],
  };

  render() {
    // const { items } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid >
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Promotions</h3>
                  <Button
                    color="primary"
                    type="button"
                    style={{ float: "right" }}
                    onClick={(event) =>
                      (window.location.href = "/promotionsadd")
                    }
                  >
                    New Promotion
                  </Button>
                </CardHeader>
                <CardBody>
                  <div>
                    {/* Page Content */}
                    <Row>
                      <Card
                        style={{
                          width: "18rem",
                          height: 230,
                          marginLeft: 35,
                          marginRight: 15,
                        }}
                      >
                        {/* <CardImg
                          alt="..."
                          src={require("assets/images/promotions/offer1.jpg")}
                          top
                        /> */}
                        <CardBody>
                          <CardText>
                            Special offer for WAGONR customers to get their full
                            vehicle service for a special price.Available at our
                            all outlets.This offer is valid until the end of
                            July
                          </CardText>
                        </CardBody>
                      </Card>

                      <Card
                        style={{
                          width: "18rem",
                          height: 230,
                          // marginLeft: 35,
                          marginRight: 15,
                        }}
                      >
                        {/* <CardImg
                          alt="..."
                          src={require("assets/images/promotions/offer2.jpg")}
                          top
                        /> */}
                        <CardBody>
                          <CardText>
                            Special offer for Suzuki ALTO 800 customers to get
                            their full vehicle service for a special price.This
                            offer is valid until the end of July
                          </CardText>
                        </CardBody>
                      </Card>

                      <Card
                        style={{
                          width: "18rem",
                          height: 230,
                          // marginLeft: 35,
                          marginRight: 15,
                        }}
                      >
                        {/* <CardImg
                          alt="..."
                          src={require("assets/images/promotions/offer3.jpg")}
                          top
                        /> */}
                        <CardBody>
                          <CardText>
                            Get the premium offer. Free Quick wax along with 25%
                            offer on each full service
                          </CardText>
                        </CardBody>
                      </Card>
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

export default PromotionsView;
