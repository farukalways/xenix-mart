import { IoMdClose } from "react-icons/io";
import Categories from "./Categories";
import Filtered from "./Filtered";

const Sidebar = ({
  onSelectedCategory,
  onSelectedSortOption,
  selectedCategory,
  selectedSortOption,
  onClearFilters,
  showFilterBer,
  setShowFilterBer,
  selectedProduct,
}) => {
  return (
    <aside
      className={`
     
    bg-white p-4 h-screen
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

      <Categories onSelectedCategory={onSelectedCategory} />
      <Filtered onSelectedSortOption={onSelectedSortOption} />

      {(selectedCategory || selectedSortOption) && (
        <div className="text-right mt-3">
          <button onClick={onClearFilters} className="text-sm text-gray-600">
            Clear
          </button>
        </div>
      )}
    </aside>
  );
};
export default Sidebar;
