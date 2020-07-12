import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from "reactstrap";

const AuthButtons = (props) => {
  const { text } = props;
  return (
    <>
      <NavItem className="ml-4 d-sm-block">
        <Link
          className={text==="black"?"mb-0 text-sm font-weight-bold":"mb-0 text-sm font-weight-bold text-white"}
          to="/auth/login"
          tag={Link}
        >
          <i className="ni ni-circle-08" />
          <span className="nav-link-inner--text ">Login</span>
        </Link>
      </NavItem>
      <NavItem className="ml-4 d-sm-block">
        <Link
          className={text==="black"?"mb-0 text-sm font-weight-bold":"mb-0 text-sm font-weight-bold text-white"}
          to="/auth/register"
          tag={Link}
        >
          <i className="ni ni-circle-08" />
          <span className="nav-link-inner--text ">Register</span>
        </Link>
      </NavItem>
    </>
  );
};

export default AuthButtons;
