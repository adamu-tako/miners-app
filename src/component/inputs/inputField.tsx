import { ChangeEvent, FC } from "react";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (s: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required: boolean;
  type?: string;
}

const InputField: FC<InputProps> = (props) => {
  return (
    <div className="col-span-2">
      {props.label && (
        <label className="block mb-2 text-sm font-medium text-black">
          {props.label}
        </label>
      )}
      <input
        type={props.type ?? "text"}
        name={props.label}
        value={props.value}
        onChange={props.onChange}
        className="bg-secondaryGrey focus:outline-1 focus:outline-primary text-mainGray text-sm rounded-lg block w-full p-2.5"
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

export default InputField;
