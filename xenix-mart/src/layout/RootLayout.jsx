import { Outlet } from "react-router";
import Navber from "../components/Navber";
import ProductProvider from "../provider/ProductProvider";

const RootLayout = () => {
  return (
    <div className="bg-[#ffffff] max-w-[1320px] mx-auto min-h-screen">
      <div className="w-11/12 mx-auto py-7">
        <Navber />

        <ProductProvider>
          <div className="mt-5">
            <Outlet />
          </div>
        </ProductProvider>
      </div>
    </div>
  );
};

export default RootLayout;
