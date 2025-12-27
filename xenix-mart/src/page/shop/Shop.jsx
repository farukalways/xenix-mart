import { Outlet, useParams } from "react-router";
import Sidebar from "./sideber/Sidebar";
import Products from "./Products";

const Shop = () => {
  const { id } = useParams();
  const isDetailsPage = Boolean(id);

  return (
    <section className="flex min-h-screen">
      {!isDetailsPage && <Sidebar />}

      <main
        className={
          isDetailsPage
            ? "w-full bg-white p-4"
            : "w-full md:w-4/5 bg-white p-4 overflow-y-auto"
        }
      >
        {isDetailsPage ? <Outlet /> : <Products />}
      </main>
    </section>
  );
};

export default Shop;
