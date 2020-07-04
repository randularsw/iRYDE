import React, { Component } from "react";
import Header from "components/shared/header";
import {
  Container,
  Row,
  CardHeader,
  CardBody,
  Col,
  Button,
  Card,
} from "reactstrap";

class VehicleDetails extends Component {
  state = {};
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
                  <h3 className=" mb-0">Title</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <Row>
                      <Col md="10 " className="m-0 ml-5 p-0 pl-5">
                        <i className="fas fa-car" style={{ fontSize: 60 }} />
                      </Col>
                      <Col>
                        <Button color="info" type="button" >
                        <i class="far fa-edit"></i>
                        </Button>
                        <Button color="danger" type="button">
                        <i class="far fa-trash-alt"></i>
                        </Button>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <div className="col">
                        <b></b>
                      </div>
                      <div className="col">

                      </div>
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

export default VehicleDetails;
