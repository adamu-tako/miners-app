import { FC, useEffect } from "react";
import Cancel from "../../assets/CancelBlack.svg";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { toggleToastClose } from "../../store/slices/uiState";

interface ToastProps {
  timeout: number;
}
const Toast: FC<ToastProps> = ({ timeout }) => {
  const {
    type,
    label,
    showSnackbar: SHOW,
  } = useAppSelector((state) => state.uiState);
  const dispatch = useDispatch();

  let TIMER: string | number | NodeJS.Timeout | undefined;
  const handleTimeout = () => {
    TIMER = setTimeout(() => {
      dispatch(toggleToastClose());
    }, timeout);
  };

  const handleClose = () => {
    clearTimeout(TIMER);
    dispatch(toggleToastClose());
  };

  useEffect(() => {
    if (SHOW) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SHOW]);

  return (
    <>
      {SHOW && (
        <div
          id="customizeable-toast"
          className="flex z-[9999999999999] absolute top-16 right-8 items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-secondaryGrey rounded-lg shadow"
          role="alert">
          <div
            className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg text-white ${
              type === "SUCCES"
                ? "bg-green-600"
                : type === "ERROR"
                ? "bg-red-600"
                : "bg-yellow-600"
            }`}>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">{label}</div>
          <button
            onClick={handleClose}
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg p-2 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#toast-success"
            aria-label="Close">
            <span className="sr-only">Close</span>
            <img src={Cancel} alt="cancel" />
          </button>
        </div>
      )}
    </>
  );
};

export default Toast;
