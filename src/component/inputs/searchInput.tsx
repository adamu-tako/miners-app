import { ChangeEvent, FC } from "react";
import Search from "../../assets/Search.svg";

interface SearchProps {
  value: string;
  onChange: (s: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-5/12">
      <div className="absolute me-2 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <img src={Search} alt="search icon" />
      </div>
      <input
        type="search"
        value={value}
        onChange={onChange}
        id="default-search"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-mainGray rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
        placeholder="Search Miners"
      />
    </div>
  );
};

export default SearchInput;
