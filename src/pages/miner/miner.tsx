import Topnav from "../../component/topnav/topnav";
import SearchInput from "../../component/inputs/searchInput";
import PlusButton from "../../component/buttons/plusButton";
import Table from "../home/table";
import { MinerDataI } from "../../types/miners";
import { useEffect, useState } from "react";
import { getMiners } from "../../api";
import TablePagination from "../../component/tablePagination";

const Miner = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tableData, setTableData] = useState<MinerDataI[]>();
  const [minerCount, setMinerCount] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const LIMIT = 10;
  const shouldClickNext: boolean = Number(minerCount) / LIMIT < page;

  useEffect(() => {
    const fetchMinerInfo = async () => {
      try {
        const data = await getMiners(searchTerm, page, LIMIT);
        setMinerCount(data.data.count);
        setTableData(data.data.miners);
      } catch (err) {
        console.error("Error fetching miner info:", err);
      }
    };
    fetchMinerInfo();
  }, [page, searchTerm]);

  return (
    <>
      <div className="flex flex-col gap-4 h-full p-0">
        <div>
          <Topnav label={`Miner (${minerCount})`} />
        </div>

        <div className={`bg-white rounded-xl p-4 h-[86%]`}>
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
          <div className="h-[80%]">
            <Table tableData={tableData as MinerDataI[]} />
            <TablePagination
              page={page}
              setPage={setPage}
              shouldClickNext={shouldClickNext}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Miner;
