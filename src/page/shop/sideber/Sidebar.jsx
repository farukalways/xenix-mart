import Categories from "./Categories";
import Filtered from "./Filtered";

const Sidebar = ({
  onSelectedCategory,
  onSelectedSortOption,
  selectedCategory,
  selectedSortOption,
  onClearFilters,
}) => {
  return (
    <aside className="hidden md:block md:w-1/5 bg-white p-4 sticky top-0 h-screen">
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
