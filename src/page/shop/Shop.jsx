import { useState } from "react";
import Products from "./Products";
import { AllCategory } from "../../data/productCategory";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Shop = () => {
  const [categories] = useState(AllCategory);
  const [toggole, setToggole] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:block md:w-1/5 bg-white p-4 sticky top-0 h-screen">
        <div
          onClick={() => setToggole(!toggole)}
          className="flex items-center justify-between py-2 border-[#000000] border-b text-[#000000] "
        >
          <h2 className="cursor-pointer">Category</h2>
          {toggole ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
        {toggole && (
          <ul className="h-[50vh] flex flex-col text-[#000000] overflow-y-auto py-3 gap-2">
            {categories.map((category, index) => (
              <li
                onClick={() => setSelectedCategory(category)}
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
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-4/5 bg-white p-4 overflow-y-auto">
        <Products onSelectedCategory={selectedCategory} />
      </main>
    </section>
  );
};

export default Shop;
