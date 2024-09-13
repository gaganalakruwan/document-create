import React from "react";
import { FaDollarSign, FaHome, FaInfo } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-slate-800 fixed h-full py-2 px-4">
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white text-bold">Admin Dashboard</h1>
      </div>
      <hr className="mb-4"/>
      <ul>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 text-white">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
            Home
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 text-white">
            <FaDollarSign className="inline-block w-6 h-6 mr-2 -mt-2" />
            Banks
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 text-white">
            <FaInfo className="inline-block w-6 h-6 mr-2 -mt-2" />
            Conplains
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
