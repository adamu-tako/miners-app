import { FC } from "react";
import MoreSquare from "../../assets/MoreSquare.svg";
import TempProfile from "../../assets/TempProfile.svg";
import { MinerDataI } from "../../types/miners";

interface TableProps {
  tableData: MinerDataI[];
}

const Table: FC<TableProps> = (props) => {
  return (
    <>
      <div className="relative h-[99%] overflow-y-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs w-full text-mainGray">
            <tr className="h-8">
              <th scope="col" className="px-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl"
                  />
                </div>
              </th>
              <th scope="col" className="px-6 font-normal">
                Miner Name
              </th>
              <th scope="col" className="px-6 font-normal">
                Phone Number
              </th>
              <th scope="col" className="px-6 font-normal">
                State
              </th>
              <th scope="col" className="px-6 font-normal">
                Local Government
              </th>
              <th scope="col" className="px-6 font-normal">
                Ward
              </th>
              <th scope="col" className="px-6 font-normal">
                Experience
              </th>
              <th scope="col" className="px-6 font-normal">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="pb-20">
            {props.tableData?.map((data, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 text-sm text-black border-b border-[#E3F3FF]">
                <td className="w-4 px-4 py-0">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-primary bg-primary border-gray-300 rounded-3xl"
                    />
                  </div>
                </td>
                <th className="px-6 flex items-center font-normal gap-2 py-2">
                  <img className="h-7 w-7" src={TempProfile} alt="" />
                  <p>{data.fullName}</p>
                </th>
                <td className="px-6 py-2">+234 {data.phoneNumber}</td>
                <td className="px-6 py-2">{data.state}</td>
                <td className="px-6 py-2">{data.lga}</td>
                <td className="px-6 py-2">{data.ward}</td>
                <td className="px-6 py-2">{data.experience}</td>
                <td className="px-6 py-2">
                  <div title="action-button" role="button">
                    <img src={MoreSquare} alt="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
