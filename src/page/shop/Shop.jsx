import Products from "./Products";

const Shop = () => {
  return (
    <section className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:block md:w-1/5 bg-blue-400 p-4 sticky top-0 h-screen overflow-y-auto">
        <h2>Filter section</h2>
        <h2>Filter section</h2>
        <h2>Filter section</h2>
        <h2>Filter section</h2>
        <h2>Filter section</h2>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-4/5 bg-white p-4 overflow-y-auto">
        <Products />
      </main>
    </section>
  );
};

export default Shop;
