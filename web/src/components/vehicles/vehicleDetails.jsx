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
import { getVehicle, deleteVehicle } from "services/vehicleService";

class VehicleDetails extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);

    this.state = {
      vehicle: null,
    };
  }

  async componentDidMount() {
    try {
      const { data: vehicle } = await getVehicle(this.props.match.params.id);
      this.setState({ vehicle });
    } catch (err) {
      console.log("Error", err);
    }
  }

  onDelete = async (id) => {
    console.log("ddddddddddddddddd");
    try {
      const res = await deleteVehicle(id);
      console.log(res);
      this.props.history.push('/vehicles');
    } catch (error) {
      console.log("Error", error);
    }
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
                  <h3 className=" mb-0">{this.state.vehicle?.vehicleNo}</h3>
                </CardHeader>
                <CardBody>
                  <div className="ml-5 mr-5" style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <Row>
                      <Col md="10 " className="m-0 ml-5 p-0 pl-5">
                        <i className="fas fa-car" style={{ fontSize: 60 }} />
                      </Col>
                      <Col>
                        <Button color="info" type="button">
                          <i class="far fa-edit"></i>
                        </Button>
                        <Button
                          color="danger"
                          type="button"
                          onClick={()=>this.onDelete(this.state.vehicle?._id)}
                        >
                          <i class="far fa-trash-alt"></i>
                        </Button>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <div className="col-6 m-3">
                        <Row>
                          <b>Vehicle Brand :</b>
                          <p className="pl-2"> {this.state.vehicle?.brand}</p>
                        </Row>
                        <Row>
                          <b>Vehicle Model :</b>
                          <p className="pl-2">{this.state.vehicle?.model}</p>
                        </Row>
                        <Row>
                          <b>Vehicle Class :</b>
                          <p className="pl-2">{this.state.vehicle?.type}</p>
                        </Row>
                        <Row>
                          <b>Vehicle Registration No :</b>
                          <p className="pl-2">
                            {this.state.vehicle?.vehicleNo}
                          </p>
                        </Row>
                        {/* <Row><b>Fuel Type :</b><p className="pl-2">Petrol</p></Row> */}
                      </div>
                      <div className="col border-left"></div>
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
