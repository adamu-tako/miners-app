import { ChangeEvent, FC } from "react";
import Nigeria from "../../assets/NigerianFlag.svg";
import InputField from "./inputField";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (s: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required: boolean;
}

const PhoneInput: FC<InputProps> = (props) => {
  return (
    <div className="flex justify-center flex-col border border-red-500">
      {props.label && (
        <label className="block mb-2 text-sm font-medium text-black">
          {props.label}
        </label>
      )}
      <div className="flex items-center">
        <button
          className="flex-shrink-0 inline-flex gap-2 items-center py-2 px-2 text-sm font-medium text-center text-mainGray bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200"
          type="button">
          <img className="w-4 h-4" src={Nigeria} alt="Nigerian flag" />
          +234
        </button>
        <InputField
          type="number"
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          required={props.required}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
