import React, { Component } from "react";
import Header from "../shared/header";
import ServiceTableRow from "./serviceTableRow";
import axios from "axios";

import { Button, Table } from "reactstrap";

import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";

class ServicesView extends Component {
  constructor(props) {
    super(props);
    this.deleteService = this.deleteService.bind(this);
    this.state = { services: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/services/")
      .then((response) => {
        this.setState({ services: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  serviceList() {
    return this.state.services.map((currentservice) => {
      return (
        <ServiceTableRow
          obj={currentservice}
          deleteService={this.deleteService}
          key={currentservice._id}
        />
      );
    });
  }

  deleteService(id) {
    axios
      .delete("http://localhost:4000/services/" + id)
      .then((res) => {
        console.log("Service deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      services: this.state.services.filter((el) => el._id !== id),
    });
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
                  <h3 className=" mb-0">Services</h3>
                  <Button
                    color="warning"
                    type="button"
                    style={{ float: "right" }}
                    onClick={(event) => (window.location.href = "/servicesadd")}
                  >
                    Add Services
                  </Button>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}

                    <Table className="align-items-center table-dark" responsive>
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col" style={{ alignItems: "center" }}>
                            Services
                          </th>
                          <th scope="col">Description</th>

                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>{this.serviceList()}</tbody>
                    </Table>
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

export default ServicesView;
