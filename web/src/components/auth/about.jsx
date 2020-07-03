import React, { Component } from "react";
import { UserContext } from "core/userContext";
import { Row, Card, CardHeader, CardBody, Container, Button } from "reactstrap";
import Header from "components/shared/header";

class About extends Component {
  static contextType = UserContext;

  render() {
    const { user, isAuthenticated } = this.context.state;
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
                    <div>
                      <div className="d-none d-md-block">
                        <Button
                          className="ml-9 mb--4"
                          color="secondary"
                          // onClick={}
                          size="sm"
                        >
                          <i className="fas fa-camera"></i>
                        </Button>
                      </div>
                        <Container
                          className="pt-0 d-none d-md-block"
                          // {...navbarBrandProps}
                          
                          to={user?.type === "vo" ? "/vo/profile" : "/sp/about"}
                        >
                          <img
                            alt="dp"
                            className="navbar-brand-img rounded-circle"
                            src={require("assets/images/dp.png")}
                            height="150"
                          />
                        </Container>
                      {user?.name} <br />
                      {user?.email} <br />
                      {user?.phone}
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

export default About;
