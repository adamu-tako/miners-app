import { FC } from "react";
import PlusIcon from "../../assets/PlusIcon.svg";

interface PlusButtonProps {
  label: string;
  handleClick: () => void;
}

const PlusButton: FC<PlusButtonProps> = ({ label, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="text-white bg-primary animate-pulse hover:animate-none hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-4 items-center">
      <img src={PlusIcon} alt="plus iocon" />
      {label}
    </button>
  );
};

export default PlusButton;
