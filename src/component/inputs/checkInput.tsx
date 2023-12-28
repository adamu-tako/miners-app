import { FC } from "react";

interface CheckBoxProp {
  label: string;
  onChange: () => void;
  value: boolean;
}

const CheckInput: FC<CheckBoxProp> = (props) => {
  return (
    <div className="flex items-center">
      <input
        checked={props.value}
        id="checked-checkbox"
        onChange={props.onChange}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-primary border-primary rounded"
      />
      <label
        htmlFor="checked-checkbox"
        className="ms-2 text-sm font-medium text-black">
        {props.label}
      </label>
    </div>
  );
};

export default CheckInput;
