import Products from "./Products";
import Sidebar from "./sideber/Sidebar";
import useProduct from "../../hooks/useProduct";

const Shop = () => {
  const { selectedProduct } = useProduct();
  return (
    <section className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main
        className={
          selectedProduct
            ? "w-full"
            : "w-full md:w-4/5 bg-white p-4 overflow-y-auto"
        }
      >
        <Products />
      </main>
    </section>
  );
};

export default Shop;
