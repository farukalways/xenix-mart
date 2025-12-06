import { Outlet } from "react-router";
import Navber from "../components/Navber";

const RootLayout = () => {
  return (
    <div className="bg-[#ffffff]">
      <div className="w-11/12 mx-auto py-7">
        <Navber />
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
