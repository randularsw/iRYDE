import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { Media, Table } from "reactstrap";
import { Button } from "reactstrap";
import { FormGroup, Form, Input, Col } from "reactstrap";

class RemoveUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: ["Smith", "Christina", "John"],
      currentUser: {
        text: "",
        key: "",
      },

      // reset(){
      //   this.setState=this.state;
      // }
    };

  
 
  }
  removeUser(user) {
    const newListUsers = this.state.listUsers.filter((listUser) => {
      return listUser !== user;
    });

    this.setState({
      listUsers: [...newListUsers],
    });
    if (newListUsers.length === 0) {
      this.setState({
        message: "No users on your list",
      });
    }
    // const users= this.state.users.filter(i => i._id !==user._id);
    // this.setState({ users});
  }

  render() {
    const { listUsers, user, message } = this.state;
    // const { users } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Reported Users</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    
                  
                    {(message !== "" || listUsers.length == 0) && (
                      <p className="message test-danger">{message}</p>
                    )}
                    {listUsers.length > 0 && (
                      <Table className="align-items-center" responsive>
                        <tbody>
                          {listUsers.map((user) => {
                            return (
                              <tr key={user}>
                                <th scope="row" col-md-2>
                                  <Media className="align-items-center">
                                    <Media>
                                      <span className="mb-0 text-sm">
                                        {user}
                                      </span>
                                    </Media>
                                  </Media>
                                </th>

                                <td>
                                  <Button
                                    onClick={(e) => this.removeUser(user)}
                                    color="danger"
                                    outline
                                    type="button"
                                  >
                                    <i
                                      class="fa fa-trash"
                                      aria-hidden="true"
                                    ></i>
                                    Remove user
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}

                         
                        </tbody>
                      </Table>
                    )}
                  </div>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default RemoveUser;
