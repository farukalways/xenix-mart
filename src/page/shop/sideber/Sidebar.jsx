import Categories from "./Categories";
import Filtered from "./Filtered";

const Sidebar = ({ onSelectedCategory, onSelectedSortOption }) => {
  return (
    <aside className="hidden md:block md:w-1/5 bg-white p-4 sticky top-0 h-screen">
      <Categories onSelectedCategory={onSelectedCategory} />
      <Filtered onSelectedSortOption={onSelectedSortOption} />
    </aside>
  );
};
export default Sidebar;
