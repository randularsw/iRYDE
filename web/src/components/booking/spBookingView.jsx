import React, { Component } from "react";
import Header from "components/shared/header";
import { Container, Row, CardHeader, CardBody } from "reactstrap";
import { Card } from "@material-ui/core";

class SpBookingView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                  <h3 className=" mb-0">Appointments</h3>
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

export default SpBookingView;
