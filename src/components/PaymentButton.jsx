import React from "react";
import axios from "axios";

const PaymentButton = () => {
  const handlePaymentButton = async () => {
    const payload = {
      amount: "1",
      deviceId: "1490352511|ezetap_android",
      customerName: "ram",
      customerMobileNumber: "9876543210",
    };

    try {
      const response = await axios.post(
        "http://localhost:2000/api/pos/start",
        payload
      );

      console.log(response);
    } catch (error) {
      console.error("Error creating payment intent:", error);
    }
  };

  return <div>
    <button onClick={handlePaymentButton} style={{height:"30px",width:"110px",border:"1px solid green",backgroundColor:"green",color:"white",borderRadius:"10px"}}>Pay Now</button>
  </div>;
};

export default PaymentButton;
