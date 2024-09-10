import React from "react";

const MobileTextInput = ({ type, ...props }) => {
  return (
    <>
      <div className="input_wrapp">
        <label className="label-input">{props.placeholder}</label>
        <input
          type={type}
          className="text-input-mobile"
          value={props.value}
          onChange={props.onChange}
          name={props.name}
        />
      </div>
    </>
  );
};

export default MobileTextInput;
