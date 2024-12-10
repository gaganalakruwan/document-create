import React, { useState } from "react";

type Props={
    title:string;
    isChecked:boolean;
    handleCheckboxChange:(e:any)=>void
}

const Checkbox = ({title,isChecked,handleCheckboxChange}:Props) => {
//   const [isChecked, setIsChecked] = useState(false); // State to manage checkbox status

  // Handler for checkbox toggle
//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

  return (
    <div>
      <label className="text-black font-medium text-xl">
        {title}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="ml-5"
        />
      </label>
    </div>
  );
};

export default Checkbox;
