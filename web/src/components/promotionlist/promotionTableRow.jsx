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
      <td>{props.obj.startDate}</td>
      <td>{props.obj.endDate}</td>
    </tr>
  );
};

export default PromotionTableRow;
