import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, Container, Button } from "reactstrap";

class PromotionsView extends Component {
  state = {
    items: [],
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
                  <h3 className=" mb-0">Promotions</h3>
                  <Button
                    color="primary"
                    type="button"
                    style={{ float: "right" }}
                    onClick={(event) =>
                      (window.location.href = "/promotionsadd")
                    }
                  >
                    Add Promotions
                  </Button>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>{/* Page Content */}</div>
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
