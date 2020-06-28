import React, { Component } from 'react';

class serviceProviderDetails extends Component {
    state = {  }
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