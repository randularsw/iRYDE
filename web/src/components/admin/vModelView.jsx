import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import ModelTableRow from "./modelTableRow";
import axios from "axios";
import { Table } from "reactstrap";

class ModelsView extends Component {
//   state = {
//     items: [],
//   };

  constructor(props) {
    super(props);
    this.deleteModel = this.deleteModel.bind(this);
    this.state = { models: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/services/")
      .then((response) => {
        this.setState({ models: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  modelList() {
    return this.state.models.map((currentmodel) => {
      return (
        <ModelTableRow
          obj={currentmodel}
          deleteService={this.deleteModel}
          key={currentmodel._id}
        />
      );
    });
  }

  deleteModel(id) {
    axios
      .delete("http://localhost:4000/services/" + id)
      .then((res) => {
        console.log("Model deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      models: this.state.models.filter((el) => el._id !== id),
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
                  <h3 className=" mb-0">Title</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <Table className="align-items-center table-dark" responsive>
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col" style={{ alignItems: "center" }}>
                            Model
                          </th>
                          <th scope="col">Type</th>

                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>{this.modelList()}</tbody>
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

export default ModelsView;
