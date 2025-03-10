import React from "react";

const DummyBox = () => {
  return <div style={{marginTop: "100px"}}>
    {new Array(5)
    .fill(9)
    .map((_) => (
      <div
        style={{
          height: "400px",
          width: "80%",
          margin: "10px auto",
          border: "1px solid gray",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "20px",
        }}
      ></div>
    ))}
  </div>;
};

export default DummyBox;
