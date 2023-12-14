import { Link } from "react-router-dom";
import ProfileIcon from "../../assets/ProfileIcon.svg";

const Topnav = ({ label }: { label: string }) => {
  return (
    <div className="h-20 flex justify-between items-center px-5 w-full rounded-xl bg-white">
      <div className="h-[2.9rem]">
        <p className="text-black font-bold text-xl">{label}</p>
        <p className="text-darkBlue text-xs">
          Good Evening - Sunday, 1 September 2023
        </p>
      </div>
      <div className="flex gap-4 items-center justify-between h-[2.9rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none">
          <path
            opacity="0.5"
            d="M18.7501 9.5V10.204C18.7501 11.049 18.9901 11.875 19.4421 12.578L20.5501 14.301C21.5611 15.875 20.7891 18.014 19.0301 18.511C14.4338 19.813 9.56631 19.813 4.97006 18.511C3.21106 18.014 2.43906 15.875 3.45006 14.301L4.55806 12.578C5.01164 11.8694 5.25217 11.0454 5.25106 10.204V9.5C5.25106 5.634 8.27306 2.5 12.0001 2.5C15.7271 2.5 18.7501 5.634 18.7501 9.5Z"
            fill="#88A1B3"
          />
          <path
            d="M7.24316 19.045C7.56991 20.0492 8.20605 20.9241 9.06046 21.5446C9.91487 22.1651 10.9437 22.4992 11.9997 22.4992C13.0556 22.4992 14.0845 22.1651 14.9389 21.5446C15.7933 20.9241 16.4294 20.0492 16.7562 19.045C13.6112 19.635 10.3892 19.635 7.24316 19.045Z"
            fill="#88A1B3"
          />
        </svg>
        <div className="flex gap-3">
          <img src={ProfileIcon} alt="profile icon" />
          <div>
            <p className="text-black font-[500] text-base">Muhammad Bashir</p>
            <Link
              className="cursor-pointer text-primary text-[0.67rem]"
              to="/settings">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
