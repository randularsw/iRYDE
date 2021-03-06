import React from "react";

import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";

const PromotionTableRow = (props) => {
  return (
    <tr>
      <td>{props.obj.title}</td>

      <td>{props.obj.description}</td>
      <td>{props.obj.startDate.substring(0, 10)}</td>
      <td>{props.obj.endDate.substring(0, 10)}</td>
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
            <DropdownItem
              tag="a"
              href={"/edit/" + props.obj._id}
              //onClick={(e) => e.preventDefault()}
            >
              Edit
            </DropdownItem>
            <DropdownItem
              href="#pablo"
              onClick={() => {
                props.deletePromotion(props.obj._id);
              }}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
};

export default PromotionTableRow;
