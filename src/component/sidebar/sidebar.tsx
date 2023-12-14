import GraphFill from "../../assets/GraphFill.svg";
import MinerFill from "../../assets/MinerFill.svg";
import Setting from "../../assets/Setting.svg";
import Graph from "../../assets/Graph.svg";
import Miner from "../../assets/Miner.svg";
import Company from "../../assets/Company.svg";
import CompanyFill from "../../assets/CompanyFill.svg";
import Lga from "../../assets/Lga.svg";
import LocationFill from "../../assets/LocationFill.svg";
import Chart from "../../assets/Chart.svg";
import ChartFill from "../../assets/ChartFill.svg";
import FilledGear from "../../assets/FilledGear.svg";
import { useLocation, Link } from "react-router-dom";

const SidebarComponent = () => {
  const { pathname } = useLocation();

  const menuItems = [
    {
      label: "Dashboard",
      activeImage: GraphFill,
      inactiveImage: Graph,
      path: "/",
    },
    {
      label: "Miners",
      activeImage: MinerFill,
      inactiveImage: Miner,
      path: "miners",
    },
    {
      label: "Companies",
      activeImage: CompanyFill,
      inactiveImage: Company,
      path: "companies",
    },
    {
      label: "Local Government",
      activeImage: LocationFill,
      inactiveImage: Lga,
      path: "lga",
    },
    {
      label: "Charts",
      activeImage: ChartFill,
      inactiveImage: Chart,
      path: "charts",
    },
    {
      label: "Settings",
      activeImage: FilledGear,
      inactiveImage: Setting,
      path: "settings",
    },
  ];
  return (
    <>
      <div className="flex flex-row bg-primary p-4 rounded-xl">
        <div className="flex flex-col w-60 overflow-hidden">
          <div className="flex items-center bg-white justify-center h-10">
            <h1 className="text-xl uppercase text-black">Logo</h1>
          </div>
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.label} className="my-1">
                <Link
                  to={item.path}
                  className={`flex flex-row items-center py-2 pl-4 rounded-xl h-12 transform  hover:translate-x-2 transition-transform ease-in duration-200 text-black ${
                    pathname === `/${item.path}` || pathname === item.path
                      ? "bg-white text-primary"
                      : ""
                  }`}>
                  <div className="mr-3">
                    {pathname === `/${item.path}` || pathname === item.path ? (
                      <img
                        className="w-6 h-6"
                        src={item.activeImage}
                        alt="outline icon"
                      />
                    ) : (
                      <img
                        className="w-6 h-6"
                        src={item.inactiveImage}
                        alt="filled icon"
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
