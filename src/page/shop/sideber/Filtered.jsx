import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { sortingOptions } from "../../../data/productCategory";
import { FaArrowRightLong } from "react-icons/fa6";

const Filtered = ({ onSelectedSortOption }) => {
  const sortOptions = sortingOptions;

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex items-center justify-between py-2 border-[#000000] border-b text-[#000000] "
      >
        <h2 className="cursor-pointer">Filter</h2>

        {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>

      {isActive && (
        <ul className="max-h-[30vh] flex flex-col text-[#000000] overflow-y-auto py-3 gap-2">
          {sortOptions.map((sortOption, index) => (
            <li
              onClick={() => onSelectedSortOption(sortOption)}
              key={index}
              className="relative cursor-pointer flex items-center  pl-1 group"
            >
              <FaArrowRightLong className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm pt-1" />

              <span className="transition-transform duration-300 group-hover:translate-x-4 group-hover:text-gray-600">
                {sortOption}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Filtered;
