import React, { Component } from "react";

import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import Axios from "axios";

class ServiceTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    Axios.delete("http://localhost:4000/services/" + this.props.obj._id)
      .then((res) => {
        console.log("Service deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.servicename}</td>

        <td>{this.props.obj.description}</td>

        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={(e) => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem href="#pablo" onClick={this.deleteStudent}>
                Delete
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    );
  }
}

export default ServiceTableRow;
