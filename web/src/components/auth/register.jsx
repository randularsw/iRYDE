import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  Nav,
  NavItem,
  TabContent,
  TabPane,
} from "reactstrap";
import Header from "components/shared/header";
import VoRegister from "./voRegister";
import { Component } from "react";
import SpRegister from "./spRegister";

class Register extends Component {
  state = {
    tabs: 1,
  };

  toggleNavs = (e, state, index) => {
    // e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="justify-content-center row mt--7 ml-0 mr-0">
          <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0 mb-7">
              <CardHeader className="bg-transparent pb-3">
                <div className="text-muted text-center mt-2 mb-2">
                  <small>Register as a</small>
                </div>
                <div className="nav-wrapper">
                  <Nav
                    className="nav-fill flex-column flex-md-row"
                    id="tabs-icons-text"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <Button
                        block
                        color={this.state.tabs === 1 ? "primary" : "secondary"}
                        onClick={(e) => this.toggleNavs(e, "tabs", 1)}
                        role="tab"
                      >
                        Vehicle Owner
                      </Button>
                    </NavItem>
                    <NavItem>
                      <Button
                        block
                        color={this.state.tabs === 2 ? "primary" : "secondary"}
                        onClick={(e) => this.toggleNavs(e, "tabs", 2)}
                        role="tab"
                      >
                        Service Provider
                      </Button>
                    </NavItem>
                  </Nav>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5">
                <div className="text-center text-muted mb-4">
                  {/* <small>Register with credentials</small> */}
                </div>
                <TabContent activeTab={"tabs" + this.state.tabs}>
                  <TabPane tabId="tabs1">
                    <VoRegister />
                  </TabPane>
                  <TabPane tabId="tabs2">
                    <SpRegister />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
}

export default Register;
