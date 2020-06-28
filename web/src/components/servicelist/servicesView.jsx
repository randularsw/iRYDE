import React, { Component } from "react";
import Header from "../shared/header";
import { Button } from "reactstrap";
import { CardImg, CardTitle, CardText } from "reactstrap";
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";

class ServicesView extends Component {
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
                      <tbody>
                        <tr>
                          <th scope="row">
                            <td>General repairs</td>
                          </th>
                          <td>
                            2K heated booth painting with 3 year warranty on all
                            paint jobs
                          </td>

                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu
                                className="dropdown-menu-arrow"
                                right
                              >
                                <DropdownItem
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Edit
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Delete
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                        </tr>
                      </tbody>
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
