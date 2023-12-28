import DashboardCard from "../../component/card/card";
import Topnav from "../../component/topnav/topnav";
import LocationBlue from "../../assets/LocationBlue.svg";
import LocationOrange from "../../assets/LocationOrange.svg";
import CompanyFarme from "../../assets/CompanyFrame.svg";
import PlusButton from "../../component/buttons/plusButton";
import SearchInput from "../../component/inputs/searchInput";
import { useEffect, useState } from "react";
import Table from "./table";
import Modal from "../../component/modals/modal";
import NewMinerForm from "../../component/forms/newMiner";
import { Link } from "react-router-dom";
import { getMiners } from "../../api";
import { MinerDataI } from "../../types/miners";

const Hompage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tableData, setTableData] = useState<MinerDataI[]>();
  const user = JSON.parse(localStorage.getItem("Session") as string).rest;

  useEffect(() => {
    const fetchMinerInfo = async () => {
      try {
        const data = await getMiners(searchTerm, 1, 5);
        setTableData(data.data);
      } catch (err) {
        console.error("Error fetching miner info:", err);
        // Handle the error, set an error state, or display an error message
      }
    };
    fetchMinerInfo();
  }, [searchTerm]);

  return (
    <>
      <div className="flex flex-col overflow-hidden h-full p-0 rounded-xl">
        <div>
          <Topnav label={`Hi, ${user.firstName}`} />
          <div>
            <div className="mb-3">
              <div className="flex gap-4 my-3">
                <DashboardCard
                  image={LocationBlue}
                  title="800"
                  subTitle="Miners in 24 states"
                />
                <DashboardCard
                  image={LocationOrange}
                  title="800"
                  subTitle="Miners in 24 LGAs"
                />
              </div>
              <DashboardCard
                image={CompanyFarme}
                title="800"
                subTitle="Miners in 24 LGAs"
                width="w-full"
              />
            </div>
          </div>
        </div>
        <div className={`bg-white rounded-xl p-4 h-full`}>
          <div className="text-[1.0625rem] flex justify-between">
            <h1 className="font-semibold text-black">List of Miners (400)</h1>
            <Link to="miners">
              <p className="text-primary font-medium hover:text-decoration-line">
                See all
              </p>
            </Link>
          </div>
          <div className="my-4 flex justify-between">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <PlusButton
              handleClick={() => setShowModal(!showModal)}
              label="Add New Miner"
            />
          </div>
          <div className="h-[75%]">
            <Table tableData={tableData as MinerDataI[]} />
          </div>
        </div>
      </div>
      {showModal && (
        <>
          <Modal header="New Miner" onClose={() => setShowModal(false)}>
            <div>
              <NewMinerForm />
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default Hompage;
