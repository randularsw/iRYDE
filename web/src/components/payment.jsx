import React, { Component } from "react";
import Header from "./shared/header";
import axios from "axios";
import { Row, Card, CardHeader, CardBody, Container } from "reactstrap";
import { FormGroup, Form, Input, Col, Button } from "reactstrap";
import { UserContext } from "core/userContext";
import ReactPayPal from "components/ReactPaypal";

export default function Payment() {
  const [checkout, setCheckout] = React.useState(false);

  return (
    <>
      <Header />
      <Container className=" mt--9" fluid>
        {/* Table */}
        <Col lg="10">
          <Card
            className="bg-secondary shadow border-0 mb-7"
            style={({ backgroundColor: "#f4f5f7" }, { marginLeft: "9.8rem" })}
          >
            <CardHeader className=" bg-transparent">
              <h3 className=" mb-0">Add promotions</h3>
            </CardHeader>
            <CardBody>
              <div style={{ minHeight: 400 }}>
                {checkout === true ? (
                  <div className="payment-div">
                    <ReactPayPal />
                  </div>
                ) : (
                  <div>
                    <h1>React-PayPal</h1>
                    <button
                      onClick={() => {
                        setCheckout(true);
                      }}
                      className="checkout-button"
                    >
                      Pay Subscription
                    </button>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     {checkout === true ? (
    //       <div className="payment-div">
    //        <ReactPayPal />
    //       </div>
    //     ) : (
    //       <div>
    //         <h1>React-PayPal</h1>
    //         <button
    //           onClick={() => {
    //             setCheckout(true);
    //           }}
    //           className="checkout-button"
    //         >
    //           Pay Subscription
    //         </button>
    //       </div>
    //     )}
    //   </header>
    // </div>
  );
}

// class Payment extends Component {
//   static contextType = UserContext;
//   constructor(props) {
//     super(props);

//     this.state = {
//       servicename: "",
//       description: "",
//       upload: "",

//       //items: [],
//     };
//   }

//   render() {
//     // const { items } = this.state;

//     return (
//       <>
//         <Header />
//         <Container className=" mt--9" fluid>
//           {/* Table */}
//           <Row>
//             <div className=" col">
//               <Card className=" shadow" style={{ backgroundColor: "#f4f5f7" }}>
//                 <CardHeader className=" bg-transparent">
//                   <h3 className=" mb-0">Add Services</h3>
//                 </CardHeader>
//                 <CardBody>
//                   <div style={{ minHeight: 400 }}>{/* Page Content */}</div>
//                 </CardBody>
//               </Card>
//             </div>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }

//export default Payment;
