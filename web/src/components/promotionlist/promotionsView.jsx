import React, { Component } from "react";
import Header from "../shared/header";
import PromotionTableRow from "./promotionTableRow";
import axios from "axios";
import { getPromotions } from "services/promotionService";
import { UserContext } from "core/userContext";
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
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = { promotions: [] };
  }

  async componentDidMount() {
    try {
      const userdata = await this.context.currentUser();
      this.setState(userdata);
      const res = await getPromotions(userdata.user?._id);
      console.log(11111, res.data);
      this.setState({ promotions: res.data });
    } catch (err) {
      console.log("Error", err);
    }
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
                          <th scope="col" style={{ alignItems: "center" }}>
                            Description
                          </th>
                          <th scope="col" style={{ alignItems: "center" }}>
                            Start Date
                          </th>
                          <th scope="col" style={{ alignItems: "center" }}>
                            End Date
                          </th>

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
