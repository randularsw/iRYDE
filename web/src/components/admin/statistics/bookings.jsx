import React, { Component } from "react";
import Header from "../../shared/header";
import { Row, Card, CardHeader, CardBody, Container, Table,Media } from "reactstrap";
import {getCountBookings} from '../../../services/statisticsService';
class Bookings extends Component {
//   state = {
//     items: [],
//   };
state = {
    items: [],
    spname:"",
    bookings:null,
  };
  async componentDidMount() {
    try {
      const result = await getCountBookings();
      console.log(result.data.spCount);
      this.setState({spname:result.data.spname});
      this.setState({bookings:result.data.bCount});
      
    } catch (err) {
      console.log("Error", err);
    }
}

  render() {
    // const { items } = this.state;
    return (
      <>
     
     
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                
                <CardBody>
                  <div style={{ minHeight: 200 }}>
                    {/* Page Content */}
                    <h1>Service Providers' Details</h1>
                    <Table className="align-items-center" responsive>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Service Provider's Name</th>
                          <th scope="col">Total Bookings</th>
                          <th scope="col"></th>
                          <th scope="col"></th>

                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <Media className="align-items-center">
                              <Media>
                                <span className="mb-0 text-sm">
                                {this.state.spname}
                                </span>
                              </Media>
                            </Media>
                          </th>
                          <td>{this.state.bookings}</td>
                          <td></td>

                          <td></td>
                          <td className="text-right"></td>
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

export default Bookings;
