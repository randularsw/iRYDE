import React, { Component } from "react";
import Header from "../shared/header";
import ServiceTableRow from "./serviceTableRow";
import axios from "axios";
import { UserContext } from "core/userContext";
import { getServices, deleteServices } from "services/serviceService";

import { Button, Table } from "reactstrap";

import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

class ServicesView extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);

    // this.deleteService = this.deleteService.bind(this);
    this.state = { services: [] };
  }

  async componentDidMount() {
    try {
      const userdata = await this.context.currentUser();
      this.setState(userdata);
      const res = await getServices(userdata.user?._id);
      this.setState({ services: res.data });
    } catch (err) {
      console.log("Error", err);
    }
  }

  // serviceList() {
  //   return this.state.services.map((currentservice) => {
  //     return (
  //       <ServiceTableRow
  //         obj={currentservice}
  //         deleteService={this.onDelete}
  //         key={currentservice._id}
  //       />
  //     );
  //   });
  // }

  onDelete = async (id) => {
    try {
      const res = await deleteServices(id);
      console.log(res);
    } catch (error) {
      console.log("Error", error);
    }
    this.setState({
      services: this.state.services.filter((el) => el._id !== id),
    });
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
                  <h3 className=" mb-0">Services</h3>
                  <Button
                    color="primary"
                    type="button"
                    style={{ float: "right" }}
                    onClick={(event) => (window.location.href = "/servicesadd")}
                  >
                    Add Services
                  </Button>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    <div className=" row m-4 p-1">
                      {this.state.services.map((v) => (
                        <Card
                          style={
                            ({ width: "18rem" },
                            { marginRight: "15rem" },
                            { marginTop: "10px" },
                            { padding: "10px" })
                          }
                        >
                          <CardImg alt="..." src={v.imageUrl} top />
                          <CardBody>
                            <CardTitle style={{ fontWeight: "bold" }}>
                              {v.servicename}
                            </CardTitle>
                            <CardText style={{ maxWidth: "18rem" }}>
                              {v.description}
                            </CardText>

                            <Button
                              color="primary"
                              type="button"
                              style={{ float: "right" }}
                              onClick={() => this.onDelete(v._id)}
                            >
                              <i class="far fa-trash-alt"></i>
                            </Button>
                          </CardBody>
                        </Card>
                      ))}
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

export default ServicesView;
