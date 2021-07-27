import React from "react";

const style = {
  background: "#C1C1C1",
  border: "2px solid black",
  margin:"1px",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
