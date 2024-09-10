import React from "react";

const CustomInput = ({ type, ...props }) => {
  return (
    <>
      <div className="input_wrapp">
        <label className="label-input">{props.placeholder}</label>
        <input
          type={type}
          className="text-input"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
        />
      </div>
    </>
  );
};

export default CustomInput;
