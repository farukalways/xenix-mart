import { useState } from "react";
import Products from "./Products";
import Sidebar from "./sideber/Sidebar";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState(null);
  const [showFilterBer, setShowFilterBer] = useState(false);

  return (
    <section className="flex min-h-screen">
      {/* Sidebar */}

      <Sidebar
        onSelectedCategory={setSelectedCategory}
        onSelectedSortOption={setSelectedSortOption}
        selectedCategory={selectedCategory}
        selectedSortOption={selectedSortOption}
        showFilterBer={showFilterBer}
        setShowFilterBer={setShowFilterBer}
      />

      {/* Main Content */}
      <main className="w-full md:w-4/5 bg-white p-4 overflow-y-auto">
        <Products
          onSelectedCategory={selectedCategory}
          selectedSortOption={selectedSortOption}
          onSelectedSortOption={setSelectedSortOption}
          setShowFilterBer={setShowFilterBer}
          showFilterBer={showFilterBer}
        />
      </main>
    </section>
  );
};

export default Shop;
