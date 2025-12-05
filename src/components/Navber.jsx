import { Link, NavLink } from "react-router";

const Navber = () => {
  const authLink = (
    <>
      <li>
        <Link>Sign in</Link>
      </li>
      <li>
        <Link>Create account</Link>
      </li>
    </>
  );

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white px-4 py-2 rounded" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white px-4 py-2 rounded" : ""
          }
          to={"/shop"}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white px-4 py-2 rounded" : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white px-4 py-2 rounded" : ""
          }
          to={"/features"}
        >
          Features
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link
          to="/"
          className="hidden lg:flex text-2xl lg:text-3xl font-semibold"
        >
          Xenix Mart
        </Link>

        {/* search */}
        <label className="inline-flex items-center gap-2 bg-base-100 px-3 w-full max-w-48 h-10 rounded-lg border-2 border-white shadow-none lg:hidden">
          <svg
            className="h-[1.3em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="w-full  h-full bg-transparent border-none outline-none focus:outline-none"
            placeholder="Search"
          />
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1  menu text-xl">{links}</ul>
      </div>
      <div className="navbar-center ml-16 lg:hidden">
        <Link to="/" className="text-xl lg:text-3xl font-semibold">
          Xenix Mart
        </Link>
      </div>

      <div className="navbar-end ">
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className=" m-1 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-xl"
          >
            {links}
            {authLink}
          </ul>
        </div>

        <ul className=" menu-horizontal px-1 gap-7 hidden text-sm lg:flex">
          {" "}
          {authLink}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
