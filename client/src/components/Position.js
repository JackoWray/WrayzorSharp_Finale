import React from "react";

export default function Position({ justified }) {
  const styles = {
    width: "160px",
    height: "160px",
    backgroundColor: "#9e9e9e",
    alignSelf: "center",
    justifySelf: justified,
    boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
  };
  return <div style={styles}>Position</div>;
}
