import React, { Component } from "react";
import { CardBody, Collapse, Card } from "reactstrap";

class ServiceSummary extends Component {
  state = { isOpen: false };

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const { s } = this.props;
    console.log(s);
    return (
      <div className="mb-1" key={s._id}>
        <Card>
          <CardBody>
            <a
              color="primary"
              onClick={() => this.toggle()}
              style={{
                marginBottom: "1rem",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {s.servicename} <i className="fas fa-caret-down"></i>
            </a>
            <Collapse isOpen={this.state.isOpen}>
              <div className="row">
                <div className="col-6">
                  <img src={s.imageUrl} alt="" style={{ width: 180 }} />
                </div>
                <div className="col">
                  <small>{s.description}</small>
                </div>
              </div>
            </Collapse>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ServiceSummary;
