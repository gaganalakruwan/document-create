import React from "react";

type props = {
  title: string;
  onClick: () => void;
};

const SaveButton = ({ title, onClick }: props) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="bg-sky-600 pl-3 pr-3 pt-2 pb-2 text-red-50 mt-5"
      >
        {title}
      </button>
    </>
  );
};

export default SaveButton;
