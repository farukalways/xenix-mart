import { useState } from "react";
import Products from "./Products";
import Sidebar from "./sideber/Sidebar";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState("Best Selling");

  console.log(selectedSortOption);

  return (
    <section className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        onSelectedCategory={setSelectedCategory}
        onSelectedSortOption={setSelectedSortOption}
      />

      {/* Main Content */}
      <main className="w-full md:w-4/5 bg-white p-4 overflow-y-auto">
        <Products onSelectedCategory={selectedCategory} />
      </main>
    </section>
  );
};

export default Shop;
