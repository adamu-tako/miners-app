import { ChangeEvent, FC } from "react";

interface SelectProps {
  value: string;
  placeholder: string;
  onChange: (s: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  options: { value: string; label: string }[];
}

const SelectInput: FC<SelectProps> = (props) => {
  return (
    <div className="col-span-2 sm:col-span-1">
      {props.label && (
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-black dark:text-white">
          {props.label}
        </label>
      )}
      <select
        id="category"
        className="bg-secondaryGrey focus:outline-1 focus:outline-primary text-mainGray text-sm rounded-lg block w-full p-2.5">
        {props.options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
