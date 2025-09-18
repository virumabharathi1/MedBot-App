import React from "react";
import { useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div style={{ maxWidth: "700px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Thank You!</h2>
      <p>Your appointment request has been submitted successfully.</p>
      {/* <h4>Submitted Details:</h4>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default ThankYou;
