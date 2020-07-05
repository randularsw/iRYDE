import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import UserDropdown from "./userDropdown";
import AuthButtons from "./authButtons";
import { UserContext } from "core/userContext";

class NavigationBar extends React.Component {
  static contextType = UserContext;

  async componentDidMount() {
    try {
      this.context.getUserOnPageLoad();
    } catch (ex) {
      console.log("exception", ex);
    }
  }

  render() {
    const { user, isAuthenticated } = this.context.state;
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {/* <img alt="..."
              width="180" src={require("assets/images/logo.png")} /> */}
              {/* {this.props.brandText} */}
            </Link>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              {isAuthenticated && (
                <UncontrolledDropdown nav>
                  <DropdownToggle className="pr-0" nav>
                    <Media className="align-items-center">
                      <span className="avatar avatar-sm rounded-circle">
                        {user?.type === "vo" && (
                          <img
                            alt="..."
                            src={require("assets/images/voPhoto.png")}
                          />
                        )}
                        {user?.type === "sp" && (
                          <img
                            alt="..."
                            src={require("assets/images/spPhoto.png")}
                          />
                        )}
                      </span>
                      <Media className="ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm font-weight-bold">
                          {user.name}
                        </span>
                      </Media>
                    </Media>
                  </DropdownToggle>
                  <UserDropdown />
                </UncontrolledDropdown>
              )}
              {!isAuthenticated && <AuthButtons text="white" />}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavigationBar;
