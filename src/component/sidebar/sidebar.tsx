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
import Hamburger from "../../assets/Hamburger.svg";
import FilledGear from "../../assets/FilledGear.svg";
import Cancel from "../../assets/Cancel.svg";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

const SidebarComponent = () => {
  const { pathname } = useLocation();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

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
      <div className="flex flex-row bg-white md:bg-primary p-2 md:p-4 md:rounded-xl">
        <div className="flex flex-row items-center md:items-start md:justify-start justify-between md:flex-col w-full md:w-60 overflow-hidden">
          <div className="flex items-center md:w-full bg-primary md:bg-white justify-center py-2 px-4 h-5 md:h-10">
            <h1 className="text-xs md:text-xl uppercase text-black">Logo</h1>
          </div>
          <div
            onClick={() => setShowMobileNav(true)}
            className="flex md:hidden items-center justify-center h-10">
            <img src={Hamburger} alt="hamburger menu icon" />
          </div>
          <ul className="hidden w-full md:flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.label} className="my-1">
                <Link
                  to={item.path}
                  className={`flex flex-row items-center py-2 w-full pl-4 rounded-xl h-12 transform   transition-transform ease-in duration-200 text-black ${
                    pathname === `/${item.path}` || pathname === item.path
                      ? "bg-white text-primary"
                      : "hover:translate-x-2"
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

          {showMobileNav && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-10"></div>
              <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg- backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 duration-200 animate-slide">
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <div className="flex items-center md:w-full bg-primary md:bg-white justify-center py-2 px-4 h-5 md:h-10">
                      <h1 className="text-xs md:text-xl uppercase text-black">
                        Logo
                      </h1>
                    </div>
                  </Link>
                  <div
                    onClick={() => setShowMobileNav(false)}
                    role="button"
                    className="-m-2.5 rounded-md p-2.5 text-white">
                    <span className="sr-only">Close menu</span>
                    <img className="w-5 h-5" src={Cancel} alt="cancel button" />
                  </div>
                </div>
                <ul className="flex flex-col py-4">
                  {menuItems.map((item) => (
                    <li key={item.label} className="my-1">
                      <Link
                        to={item.path}
                        className={`flex flex-row items-center py-2 pl-4 rounded-xl h-12 transform  hover:translate-x-2 transition-transform ease-in duration-200 text-black ${
                          pathname === `/${item.path}` || pathname === item.path
                            ? "text-white bg-primary"
                            : ""
                        }`}>
                        <div className="mr-3">
                          {pathname === `/${item.path}` ||
                          pathname === item.path ? (
                            <img
                              className="w-6 h-6"
                              src={item.inactiveImage}
                              alt="outline icon"
                            />
                          ) : (
                            <img
                              className="w-6 h-6"
                              src={item.activeImage}
                              alt="filled icon"
                            />
                          )}
                        </div>
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
