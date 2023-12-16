import SidebarComponent from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";

const DashboardWrapper = () => {
  return (
    <div className="flex flex-col md:flex-row h-full md:p-4 gap-4">
      <SidebarComponent />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardWrapper;
