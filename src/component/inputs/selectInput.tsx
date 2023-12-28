import { ChangeEvent, FC } from "react";

interface SelectProps {
  value: string;
  placeholder: string;
  onChange: (s: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  options: { value: string; label: string }[];
}

const SelectInput: FC<SelectProps> = (props) => {
  return (
    <div className="col-span-2 w-full">
      {props.label && (
        <label className="block mb-2 text-sm font-medium text-black">
          {props.label}
        </label>
      )}
      <select
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="bg-secondaryGrey focus:outline-1 focus:outline-primary text-black text-sm rounded-lg block w-full p-2.5">
        <option value="">{props.placeholder}</option>
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
