import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, CardImg,CardTitle,CardText,Container ,Button} from "reactstrap";
import { Link } from "react-router-dom";



class serviceProviders extends Component {
  state = {
    items: [],
  };

  render() {
    // const { items } = this.state;
    return (
      <>
        <Header />
        <Container className=" mt--9" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0" style={{fontSize:40}}>Service Providers</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */} 
                    <b style={{fontSize:30, marginBottom:0}}>Service Centers</b>
                    <div className="m-5 mt-0">
                        <Row>
                        <Card style={{ width: "18rem" ,marginLeft:9, marginRight:5}}>
                            <CardImg
                            alt="..."
                            style={{ height:150 }}
                            src={require("assets/images/sp/laugfsCarCare.jpg")}
                            top
                            />
                            <CardBody>
                            <CardTitle>
                                <Link to={"/"}>LAUGFS CarCare</Link>
                            </CardTitle>

                            </CardBody>
                        </Card>  
                        <Card style={{ width: "18rem" , marginRight:5}}>
                            <CardImg
                            alt="..."
                            style={{ height:150 }}
                            src={require("assets/images/sp/Micro.jpg")}
                            top
                            />
                            <CardBody>
                            <CardTitle><Link>Micro CarCare</Link></CardTitle>
                            
                            {/* <CardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </CardText> */}
                            {/* <Button
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Go somewhere
                            </Button> */}
                            </CardBody>
                        </Card>  
                        <Card style={{ width: "18rem", marginRight:5 }}>
                            <CardImg
                            alt="..."
                            style={{ height:150 }}
                            src={require("assets/images/sp/automiraj.jpg")}
                            top
                            />
                            <CardBody>
                            <CardTitle><Link>Auto Miraj</Link></CardTitle>
                            </CardBody>
                        </Card>   
                        <Card style={{ width: "18rem", marginRight:5 }}>
                            <CardImg
                            alt="..."
                            style={{ height:150 }}
                            src={require("assets/images/sp/amw.jpg")}
                            top
                            />
                            <CardBody>
                            <CardTitle><Link>AMW Service Center</Link></CardTitle>
                            
                            {/* <CardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </CardText> */}
                            {/* <Button
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Go somewhere
                            </Button> */}
                            </CardBody>
                        </Card>   
                        </Row>
                    </div>   
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

export default serviceProviders;
