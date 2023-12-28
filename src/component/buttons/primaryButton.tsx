import { FC } from "react";

interface PrimaryButtonProps {
  label: string;
  handleClick: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="text-white bg-primary hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-4 items-center">
      {label}
    </button>
  );
};

export default PrimaryButton;
