import { FC, MouseEventHandler, ReactNode } from "react";
import Cancel from "../../assets/Cancel.svg";

interface ModalProps {
  children: ReactNode;
  header: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const Modal: FC<ModalProps> = (props) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      <div className="flex bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
              <h3 className="text-lg font-semibold text-black ">
                {props.header}
              </h3>
              <button
                onClick={props.onClose}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle="crud-modal">
                <img className="h-3 w-3" src={Cancel} alt="Cancel button" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
