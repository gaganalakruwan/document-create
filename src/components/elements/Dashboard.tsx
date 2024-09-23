import React from "react";
import Navbar from "./Navbar";
import { RouterProvider } from "react-router-dom";
import router from "../../routes/routes";

interface DashboardProps {
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard: React.FC<DashboardProps> = ({
  sidebarToggle,
  setSidebarToggle,
}) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <RouterProvider router={router} />
    </div>
  );
};

export default Dashboard;
