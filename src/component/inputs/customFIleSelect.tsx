import { ChangeEvent, FC } from "react";
import Cancel from "../../assets/Cancel.svg";

interface FileInputProps {
  value: File;
  onChange: (s: ChangeEvent<HTMLInputElement>) => void;
  setValue: () => void;
  label: string;
}

const FileInput: FC<FileInputProps> = (props) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-black">
        {props.label}
      </label>
      <div className="flex items-center justify-center w-full">
        {props.value ? (
          <div className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="relative">
              <div
                onClick={props.setValue}
                className="cursor-pointer absolute p-2 bg-white rounded-md top-2 right-2 hover:bg-transparent hover:border">
                <img className="h-2 w-2" src={Cancel} alt="" />
              </div>
              <img
                className="h-20"
                src={URL.createObjectURL(props.value)}
                alt=""
              />
            </div>
          </div>
        ) : (
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100`}>
            <div className="flex flex-col items-center w-10/12 justify-center pt-5 pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none">
                <path
                  d="M17.5 5.83368V20.417M17.5 20.417L21.875 16.042M17.5 20.417L13.125 16.042"
                  stroke="#607087"
                  strokeWidth="0.95283"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5002 29.167C14.406 29.167 11.4385 27.9379 9.25058 25.7499C7.06266 23.562 5.8335 20.5946 5.8335 17.5004M29.1668 17.5004C29.1684 19.2495 28.7759 20.9766 28.0185 22.5532C27.2611 24.1299 26.1582 25.5157 24.7918 26.6077"
                  stroke="#607087"
                  strokeWidth="0.95283"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <input
              onChange={props.onChange}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        )}
      </div>
    </>
  );
};

export default FileInput;
