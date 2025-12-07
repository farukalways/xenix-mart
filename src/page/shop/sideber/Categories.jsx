import { useState } from "react";
import { AllCategory } from "../../../data/productCategory";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Categories = ({ onSelectedCategory }) => {
  const [categories] = useState(AllCategory);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex items-center justify-between py-2 border-[#000000] border-b text-[#000000] "
      >
        <h2 className="cursor-pointer">Category</h2>

        {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      {isActive && (
        <ul className="max-h-[30vh] flex flex-col text-[#000000] overflow-y-auto py-3 gap-2">
          {categories.map((category, index) => (
            <li
              onClick={() => onSelectedCategory(category)}
              key={index}
              className="relative cursor-pointer flex items-center  pl-1 group"
            >
              <FaArrowRightLong className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm pt-1" />

              <span className="transition-transform duration-300 group-hover:translate-x-4 group-hover:text-gray-600">
                {category}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Categories;
