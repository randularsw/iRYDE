import React, { Component } from "react";
import Header from "../shared/header";
import PromotionTableRow from "./promotionTableRow";
import axios from "axios";
import {
  Row,
  Card,
  Table,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Button,
} from "reactstrap";

class PromotionsView extends Component {
  constructor(props) {
    super(props);
    this.state = { promotions: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/promotions/")
      .then((response) => {
        this.setState({ promotions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  promotionsList() {
    return this.state.promotions.map((currentpromotion) => {
      return (
        <PromotionTableRow
          obj={currentpromotion}
          //deleteService={this.deleteService}
          key={currentpromotion._id}
        />
      );
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
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    <Table className="align-items-center table-dark" responsive>
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col" style={{ alignItems: "center" }}>
                            Title
                          </th>
                          <th scope="col">Description</th>
                          <th scope="col">Start Date</th>
                          <th scope="col">End Date</th>

                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>{this.promotionsList()}</tbody>
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

export default PromotionsView;
