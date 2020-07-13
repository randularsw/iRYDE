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
    </tr>
  );
};

export default PromotionTableRow;
