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
import { getVehicle } from "services/vehicleService";

class VehicleDetails extends Component {
  state = {
    details:[],
  };

 async componentDidMount(){
  try {
    const {data:details} = await getVehicle(this.props.match.params.id);
    this.setState({details});
    console.log(this.state.details.username);
  } catch (err) {
    console.log("Error", err);
  }
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
                  <h3 className=" mb-0">WD 4152</h3>
                </CardHeader>
                <CardBody>
                  <div className="ml-5 mr-5" style={{ minHeight: 400}}>
                    {/* Page Content */}
                    <Row > 
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
                      <div className="col-6 m-3">
                        <Row><b>Vehicle Brand :</b><p className="pl-2">Toyota</p></Row>
                        <Row><b>Vehicle Model :</b><p className="pl-2">Vitz</p></Row>
                        <Row><b>Vehicle Class :</b><p className="pl-2">Car</p></Row>
                        <Row><b>Vehicle Registration No :</b><p className="pl-2">WD 4152</p></Row>
                        {/* <Row><b>Fuel Type :</b><p className="pl-2">Petrol</p></Row> */}
                      </div>
                      <div className="col border-left">

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
