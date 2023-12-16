import { FC } from "react";

interface CardProps {
  title: string;
  subTitle: string;
  image: string;
  width?: string;
}

const DashboardCard: FC<CardProps> = (props) => {
  return (
    <>
      <div
        className={`flex gap-4 bg-white p-2 rounded-xl ${
          props.width ?? "w-6/12"
        }`}>
        <img src={props.image} alt="" />
        <div>
          <p className="text-black text-[1.5rem] font-semibold">
            {props.title}
          </p>
          <p className="text-darkBlue text-[0.8125rem]">{props.subTitle}</p>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
