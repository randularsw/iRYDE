import React, { Component } from "react";
import Header from "../../shared/header";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import Counts from './counts';
import Charts from './charts';
import Bookings from './bookings';

class Statistics extends Component {
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
                  <h3 className=" mb-0"></h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                <Counts/ >
                
                

                <Bookings/>

                <Charts/>
               
               
                
                

               
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

export default Statistics;
