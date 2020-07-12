import { Component } from "react";
import { UserContext } from "../../core/userContext";

class Logout extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log(555);

    this.context.logout();
    this.props.history.push("/");
    // window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
