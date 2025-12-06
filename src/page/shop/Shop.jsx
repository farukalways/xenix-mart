import Products from "./Products";

const Shop = () => {
  return (
    <section className="flex min-h-screen">
      <div className="w-1/5 bg-blue-400 p-4 sticky top-0 h-screen">
        <h2>filter section</h2>
        <h2>filter section</h2>
        <h2>filter section</h2>
        <h2>filter section</h2>
        <h2>filter section</h2>
      </div>
      <div className="w-4/5 bg-[#FFFFFF] p-4 overflow-y-auto  ">
        <Products />
      </div>
    </section>
  );
};

export default Shop;
