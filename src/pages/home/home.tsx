import DashboardCard from "../../component/card/card";
import Topnav from "../../component/topnav/topnav";
import LocationBlue from "../../assets/LocationBlue.svg";
import LocationOrange from "../../assets/LocationOrange.svg";
import CompanyFarme from "../../assets/CompanyFrame.svg";
import PlusButton from "../../component/buttons/plusButton";
import SearchInput from "../../component/inputs/searchInput";
import { useState } from "react";
import Table from "./table";
import Modal from "../../component/modals/modal";
import PhoneInput from "../../component/inputs/phoneInput";

const Hompage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col overflow-hidden h-full p-0 rounded-xl">
        <Topnav label="Hi, Muhammad" />
        <div>
          <div className="mb-3">
            <div
              onClick={() => setShowModal(!showModal)}
              className="flex gap-4 my-3">
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
          <div className="bg-white h-full rounded-xl p-4">
            <div className="text-[1.0625rem] flex justify-between">
              <h1 className="font-semibold text-black">List of Miners (400)</h1>
              <p className="text-primary font-medium">See all</p>
            </div>
            <div className="my-4 flex justify-between">
              <SearchInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <PlusButton
                label="Add New Miner"
                handleClick={() => console.log("Wahala be li9ke adding miner")}
              />
            </div>
            <div className="h-full max-h-[18rem] overflow-auto">
              <Table />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <>
          <Modal header="Testing Modal" onClose={() => setShowModal(false)}>
            <div className="border-2 border-red-500">
              <div>dskjvfcv</div>
              <div>dskjvfcv</div>
              <div>dskjvfcv</div>
            </div>
            <div>
              <PhoneInput
                label="dskfjs"
                value="fdsaf"
                onChange={() => console.log("first")}
                placeholder="dsfkjsd"
                required
              />
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default Hompage;
