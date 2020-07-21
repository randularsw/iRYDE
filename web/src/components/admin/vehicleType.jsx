import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { Media, Table } from "reactstrap";
import { Button } from "reactstrap";
import { FormGroup, Form, Input, Col } from "reactstrap";
import { addvehicle } from "./vehicleBrand";
import axios from 'axios';

class VehicleType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: ["Audi", " Mercedes Benz", "BMW", "Porsche", "Ferrari"],
      currentItem: {
        text: "",
        key: "",
      },
      ///////

      // reset(){
      //   this.setState=this.state;
      // }
    };

    this.addItem = this.addItem.bind(this);
  }


  addItem(e) {
    e.preventDefault();
    // console.log(this.newItem.value);
    console.log(this.itemInputValue.value);
    // console.log(values);
    const { listItems } = this.state;
    const vehicleType = this.itemInputValue.value;
//////////////
    axios.post('http://localhost:4000/vehicleTypes/add', vehicleType)
    .then(res => console.log(res.data));
    // listItems.push(this.newItem.value);
    // this.setState({
    //   listItems: [...this.state.listItems, newItem]
    // })

    const isOnTheList = listItems.push(vehicleType);

    if (isOnTheList) {
      this.setState({
        // message: "This item is already on the list",
      });
    } else {
      vehicleType !== "" &&
        this.setState({
          listItems: [...this.state.listItems, vehicleType],
          message: "",
        });
    }
  }

  removeItem(item) {
    // axios.delete('http://localhost:4000/vehicleTypes/'+id)
    // .then(res => console.log(res.data));
    // this.setState({
    //   listItems:this.state.listItems.filter(el=> el._id !==id)
    // })
    const newListItems = this.state.listItems.filter((listItem) => {
      return listItem !== item;
    });

    this.setState({
      listItems: [...newListItems],
    });
    if (newListItems.length === 0) {
      this.setState({
        message: "No Items on your list, add some",
      });
    }
    // const items= this.state.items.filter(i => i._id !==item._id);
    // this.setState({ items});
  }

  clearAll() {
    this.setState({
      listItems: [],
      message: "No Items on your list, add some",
    });
  }

  render() {
    const { listItems, item, message } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Vehicle Types</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}

                    <Form onSubmit={this.addItem}>
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <Input
                              innerRef={(node) => (this.itemInputValue = node)}
                              name="itemName"
                              className="is-valid"
                              type="text"
                              id="vehicleType"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <Button color="primary" size="lg" type="submit">
                            Add new vehicle brand
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                    {(message !== "" || listItems.length == 0) && (
                      <p className="message test-danger">{message}</p>
                    )}
                    {listItems.length > 0 && (
                      <Table className="align-items-center" responsive>
                        <tbody>
                          {listItems.map((item) => {
                            return (
                              <tr key={item}>
                                <th scope="row" col-md-2>
                                  <Media className="align-items-center">
                                    <Media>
                                      <span className="mb-0 text-sm">
                                        {item}
                                      </span>
                                    </Media>
                                  </Media>
                                </th>

                                <td>
                                  <Button
                                    onClick={(e) => this.removeItem(item)}
                                    color="danger"
                                    outline
                                    type="button"
                                  >
                                    <i
                                      class="fa fa-trash"
                                      aria-hidden="true"
                                    ></i>
                                    Delete
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}

                         
                        </tbody>
                      </Table>
                    )}
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

export default VehicleType;
