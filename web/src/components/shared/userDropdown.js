import React, { Component } from "react";
import { DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "core/userContext";

class UserDropdown extends Component {
  static contextType = UserContext;
  render() {
    const { user, isAuthenticated } = this.context.state;
    return (
      <>
        <DropdownMenu className="dropdown-menu-arrow" right>
          <DropdownItem className="noti-title" header tag="div">
            <h6 className="text-overflow m-0">Welcome!</h6>
          </DropdownItem>
          <DropdownItem to="/admin/user-profile" tag={Link}>
            <i className="ni ni-single-02" />
            <span>
              {user?.type=="vo" ? "Profile" : user?.type==="sp"? "About" :""}
            </span>
          </DropdownItem>
          <DropdownItem to="/admin/user-profile" tag={Link}>
            <i className="ni ni-settings-gear-65" />
            <span>Settings</span>
          </DropdownItem>
          <DropdownItem to="/admin/user-profile" tag={Link}>
            <i className="ni ni-support-16" />
            <span>Support</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem to="/auth/logout" tag={Link}>
            <i className="ni ni-user-run" />
            <span>Logout</span>
          </DropdownItem>
        </DropdownMenu>
      </>
    );
  }
}

export default UserDropdown;
