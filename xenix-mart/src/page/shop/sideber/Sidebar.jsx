import { IoMdClose } from "react-icons/io";
import Categories from "./Categories";
import Filtered from "./Filtered";
import useProduct from "../../../hooks/useProduct";

const Sidebar = () => {
  const {
    selectedCategory,
    selectedSortOption,
    setSelectedCategory,
    setSelectedSortOption,
    showFilterBer,
    setShowFilterBer,
    selectedProduct,
    handleClearFilters,
  } = useProduct();

  return (
    <aside
      className={`
     
    bg-[#f3ff86e3] p-4 h-screen
    fixed inset-0 z-50
    ${showFilterBer ? "block w-3/5 " : "hidden"}
    ${
      selectedProduct
        ? "hidden"
        : "md:static md:block md:z-auto md:w-1/5 md:h-auto"
    }
    
  `}
    >
      {showFilterBer && (
        <div className="flex justify-end">
          <button
            className="px-3 py-2"
            onClick={() => setShowFilterBer(!showFilterBer)}
          >
            <IoMdClose className="text-xl text-red-500" />
          </button>
        </div>
      )}

      <Categories onSelectedCategory={setSelectedCategory} />
      <Filtered onSelectedSortOption={setSelectedSortOption} />

      {(selectedCategory || selectedSortOption) && (
        <div className="text-right mt-3">
          <button
            onClick={handleClearFilters}
            className="text-sm text-gray-600"
          >
            Clear
          </button>
        </div>
      )}
    </aside>
  );
};
export default Sidebar;
