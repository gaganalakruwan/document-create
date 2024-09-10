import React, { useState } from "react";

const DropDown = ({ list,selectedValue,setSelectedValue, ...props }) => {
  return (
    <>
      <div className="input_wrapp">
        <label className="label-input">{props.placeholder}</label>
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          className="ml-1 border text-xl pr-3 input-dropdown"
        >
          {list.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DropDown;
