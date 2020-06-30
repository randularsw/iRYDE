import React, { Component } from "react";
import Header from "../shared/header";
import { Row, Card, CardHeader, CardBody, CardImg, CardTitle,Container} from "reactstrap";
import { Link } from "react-router-dom";
import { Rating } from '@material-ui/lab';
import { sp } from '../../services/userService';


class serviceProviderList extends Component {

  constructor(props){
    super(props);

    this.state = {
      serviceProviders:[]
    }
  }
 
  async componentDidMount(){
    try {
      // const serviceProviders = await getServiceProviders();
      const serviceProviders = await sp();
      this.setState({
        serviceProviders
      })  
    } catch (err) {
      console.log("Error",err);
    }
  }

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
                  <h3 className=" mb-0" style={{ fontSize: 40 }}>Service Providers</h3>
                </CardHeader>
                <CardBody>
                  <div style={{ minHeight: 300 }}>
                    {/* Page Content */}
                    <b style={{ fontSize: 30, marginBottom: 0 }}>Service Centers</b>
                    <div className="m-5 mt-0">
                      <Row>
                        {this.state.serviceProviders.map(serviceProvider => (
                          <Card key={serviceProvider._id} style={{ width: "18rem", height: 230, marginLeft: 9, marginRight: 5 }}>
                            <CardImg
                              alt="..."
                              style={{ height: 150 }}
                              src={serviceProvider.profileImage}
                              top
                            />
                            <CardBody>
                              <CardTitle>
                                <Link to={`/service-provider/${serviceProvider._id}`}>{serviceProvider.name}</Link>
                                <br />
                                <Rating name="size-small" defaultValue={2} size="small" />
                              </CardTitle>
                            </CardBody>
                          </Card>
                        ))}
                        
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

export default serviceProviderList;
