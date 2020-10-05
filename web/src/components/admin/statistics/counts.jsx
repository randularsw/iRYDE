import React, { Component } from "react";
import Header from "../../shared/header";
import { Row, Card, CardHeader, CardBody, Container, CardTitle, Col } from "reactstrap";
import {getCountSp} from '../../../services/statisticsService';
import {getCountVo} from '../../../services/statisticsService';

class Counts extends Component {
  state = {
    items: [],
    spCount:null,
    voCount:null,
  };
  async componentDidMount() {
    try {
      const result = await getCountSp();
      console.log(result.data.spCount);
      this.setState({spCount:result.data.spCount});
      this.setState({voCount:result.data.voCount});
      
    } catch (err) {
      console.log("Error", err);
    }
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
                  <h3 className=" mb-0"></h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 200 }}>
                    {/* Page Content */}
                    <Row>
                      <div style={{ width: "30rem" }}>
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardBody>
                            <Row>
                              <div className="col-md-6">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                   Service Providers
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                {this.state.spCount}
                                 
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col>
                            </Row>
                            
                          </CardBody>
                        </Card>
                      </div>
                      <div style={{ width: "30rem" }}>
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardBody>
                            <Row>
                              <div className="col-md-6">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                   Vehicle Owners
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                {this.state.voCount}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col>
                            </Row>
                            
                          </CardBody>
                        </Card>
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

export default Counts;
