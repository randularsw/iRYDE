import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import UserDropdown from "./userDropdown";

// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Alert,
} from "reactstrap";
import AuthButtons from "./authButtons";
import { UserContext } from "core/userContext";
import { getServices } from "services/serviceService";
import { getCurrentUser } from "services/authService";

class Sidebar extends React.Component {
  static contextType = UserContext;
  state = {
    collapseOpen: false,
    serviceCount: 1,
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // async componentDidMount() {
  //   const userData = await this.context.currentUser();
  //   this.setState(userData);
  //   console.log("userData",userData);
  // }

  async componentDidMount() {
    try {
      const userData = await this.context.currentUser();
      console.log(userData);
      const services = await getServices(userData.user?._id);
      const serviceCount = services.data.length;
      console.log(serviceCount);
      this.setState({ serviceCount });
    } catch (error) {
      console.log(error);
    }
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false,
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = (routes, actor) => {
    return routes.map((prop, key) => {
      if (prop.actor === actor) {
        return (
          <NavItem key={key}>
            <NavLink
              to={prop.path}
              tag={NavLinkRRD}
              onClick={this.closeCollapse}
              activeClassName="active"
            >
              <i className={prop.icon}></i>
              {prop.name}
            </NavLink>
          </NavItem>
        );
      }
      return null;
    });
  };
  render() {
    const { user, isAuthenticated } = this.context.state;

    const { routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link,
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank",
      };
    }
    return (
      <>
        {isAuthenticated && (
          <Navbar
            className="navbar-vertical fixed-left navbar-light bg-white"
            expand="md"
            id="sidenav-main"
          >
            <Container fluid>
              {/* Toggler */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={this.toggleCollapse}
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Brand */}
              {/* <div className="d-none d-md-block">
                <Button
                  className="ml-9 mb--4"
                  color="secondary"
                  // onClick={}
                  size="sm"
                >
                  <i className="fas fa-camera"></i>
                </Button>
              </div> */}
              {logo ? (
                <NavbarBrand
                  className="pt-0 d-none d-md-block"
                  {...navbarBrandProps}
                >
                  <img
                    alt={logo.imgAlt}
                    className="navbar-brand-img rounded-circle"
                    src={logo.imgSrc}
                  />
                </NavbarBrand>
              ) : null}
              {/* User */}
              <Nav className="align-items-center d-md-none">
                {isAuthenticated && (
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
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
                      </Media>
                    </DropdownToggle>
                    <UserDropdown />
                  </UncontrolledDropdown>
                )}
                {!isAuthenticated && <AuthButtons text="black" />}
              </Nav>
              {/* Collapse */}
              <Collapse navbar isOpen={this.state.collapseOpen}>
                {/* Collapse header */}
                <div className="navbar-collapse-header d-md-none">
                  <Row>
                    {logo ? (
                      <Col className="collapse-brand" xs="6">
                        {logo.innerLink ? (
                          <Link to={logo.innerLink}>
                            <img alt={logo.imgAlt} src={logo.imgSrc} />
                          </Link>
                        ) : (
                          <a href={logo.outterLink}>
                            <img alt={logo.imgAlt} src={logo.imgSrc} />
                          </a>
                        )}
                      </Col>
                    ) : null}
                    <Col className="collapse-close" xs="6">
                      <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.toggleCollapse}
                      >
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                {/* Form */}
                <Form className="mt-4 mb-3 d-md-none">
                  <InputGroup className="input-group-rounded input-group-merge">
                    <Input
                      aria-label="Search"
                      className="form-control-rounded form-control-prepended"
                      placeholder="Search"
                      type="search"
                    />
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <span className="fa fa-search" />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>

                {isAuthenticated && (
                  <>
                    <h6 className="navbar-heading text-muted">
                      {user.type === "vo"
                        ? "Vehicle Owner"
                        : user.type === "sp"
                        ? "Service Provider"
                        : "Admin"}
                    </h6>
                    <hr className="my-3" />
                    <Nav navbar>{this.createLinks(routes, user.type)}</Nav>
                    {user?.type === "sp" &&
                      (!user?.photo ||
                        !user?.paid ||
                        this.state.serviceCount == 0) && (
                        <Alert color="warning" className="mt-3">
                          <strong>Complete your profile</strong>
                          <ul>
                            <>
                              {!user?.photo && <li>Upload profile picture</li>}
                              {!user?.paid && (
                                <li>Proceed with your payment</li>
                              )}
                              {this.state.serviceCount == 0 && (
                                <li>Add your services</li>
                              )}
                            </>
                          </ul>
                        </Alert>
                      )}
                  </>
                )}
              </Collapse>
            </Container>
          </Navbar>
        )}
      </>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
