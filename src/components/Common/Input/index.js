import React from "react";
import "./styles.css";

function Input({ name, type, state, handleFunction, placeholder }) {
  return (
    <input
      name={name}
      type={type}
      value={state}
      onChange={handleFunction}
      placeholder={placeholder}
      className="custom-input"
    />
  );
}

export default Input;
