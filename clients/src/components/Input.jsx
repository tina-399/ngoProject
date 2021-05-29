import React from "react";
import "../styles/Input.css";
const Input = (props) => {
  return (
    <div className="input-container">
      <input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
