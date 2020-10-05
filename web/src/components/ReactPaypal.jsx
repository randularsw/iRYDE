import { UserContext } from "core/userContext";
import React, { useContext } from "react";
import { Row, Col, Container } from "reactstrap";

export default function ReactPayPal(props) {
  const context = useContext(UserContext);
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();

  // To show PayPal buttons once the component loads
  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Subscription Payment",
                amount: {
                  currency_code: "USD",
                  value: 50.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          pay();
          console.log(order);
        },
        onError: (err) => {
          //   setError(err),
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  const pay = async () => {
    try {
      const d = { _id: context.state.user._id };
      await context.doPayment(d);
      props.onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  // If the payment has been made
  if (paid) {
    return (
      <Container>
        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // marginLeft: "90px",
            }}
          >
            <img src={require("assets/images/check.jpg")} alt="alignment" />
          </div>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Payment Successful!..
          </p>

          <p style={{ fontWeight: "normal" }}>
            Thank you for your payment. We will be in contact with more details
            shortly.
          </p>

          {}
        </Row>
      </Container>
    );
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  // Default Render
  return (
    <div>
      <h4>Total Subscription amount to be paid is: USD 50 /-</h4>
      <div ref={paypalRef} />
    </div>
  );
}
