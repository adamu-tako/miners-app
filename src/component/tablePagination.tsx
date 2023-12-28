import { FC } from "react";

interface PaginationProps {
  page: number;
  shouldClickNext: boolean;
  setPage: (s: number) => void;
}

const TablePagination: FC<PaginationProps> = (props) => {
  return (
    <>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation">
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li
            onClick={() =>
              props.setPage(props.page === 1 ? 1 : props.page - 1)
            }>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-black bg-white border border-primary rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-primary hover:bg-gray-100 hover:text-gray-700">
              {props.page}
            </a>
          </li>
          <li
            onClick={
              props.shouldClickNext
                ? () => {}
                : () => props.setPage(props.page + 1)
            }>
            <a
              href="#"
              className={`${
                props.shouldClickNext ? "cursor-not-allowed" : "cursor-pointer"
              } flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-primary rounded-e-lg hover:bg-gray-100 hover:text-gray-700`}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TablePagination;
