import React, { Component } from 'react';
import { Row, Card, CardHeader, CardBody,  Container } from "reactstrap";
import Header from "../shared/header";
import { getServiceProvider } from 'services/userService';
import { selectedSp } from 'services/userService';

class serviceProviderDetails extends Component {
    constructor(props){
      super(props);

      this.state ={
        details:[]
      }
    }

  async componentDidMount(){
      try {
        // const {data:details} = await getServiceProvider(this.props.match.params.id);
        
        const data = await selectedSp();
        console.log(data);
        this.setState({details:data});
        console.log(this.state);
      } catch (err) {
        console.log("Error",err);
      }
    }

    render() { 
        return ( 
            <>
            <Header />
            <Container className=" mt--9" fluid>
              {/* Table */}
              <Row>
                <div className=" col">
                  <Card className=" shadow">
                    <CardHeader className=" bg-transparent">
                      <h3 className=" mb-0">Title</h3>
                    </CardHeader>
                    <CardBody>
                      <div style={{ minHeight: 400 }}>
                        {/* Page Content */}
                        Content
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
 
export default serviceProviderDetails;