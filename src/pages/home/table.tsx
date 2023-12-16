import MoreSquare from "../../assets/MoreSquare.svg";
import TempProfile from "../../assets/TempProfile.svg";

const Table = () => {
  return (
    <>
      <div className="relative">
        <table className="w-full  text-sm  text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-mainGray">
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
          <tbody>
            {[1, 23, 4, 5, 67, 8, 9, 53, 78, 89, 675, 34, 654].map((ke) => (
              <tr
                key={ke}
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
                  <p>Muhanned Junior {ke}</p>
                </th>
                <td className="px-6 py-2">+234 8067500988</td>
                <td className="px-6 py-2">Niger State</td>
                <td className="px-6 py-2">Mokwa</td>
                <td className="px-6 py-2">Tatabu</td>
                <td className="px-6 py-2">Twelve (12) Years</td>
                <td className="px-6 py-2">
                  <div role="button">
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
