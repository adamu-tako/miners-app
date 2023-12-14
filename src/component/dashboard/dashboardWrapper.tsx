import SidebarComponent from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";

const DashboardWrapper = () => {
  return (
    <div className="flex h-full p-4 gap-4">
      <SidebarComponent />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardWrapper;
