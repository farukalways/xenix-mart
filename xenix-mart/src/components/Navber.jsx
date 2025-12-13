import { Link, NavLink } from "react-router";

const Navber = () => {
  const authLink = (
    <>
      <li>
        <Link to={"/login"}>Sign in</Link>
      </li>
      <li>
        <Link to={"/register"}>Create account</Link>
      </li>
    </>
  );

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/features", label: "Features" },
  ];
  return (
    <div className="navbar bg-[#ffffff] shadow-sm">
      <div className="navbar-start">
        <Link
          to="/"
          className="hidden lg:flex text-2xl lg:text-3xl font-semibold text-[#000000]"
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
        <ul className="menu-horizontal px-1 gap-3 menu text-xl relative">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `btn-slide p-2 rounded text-[#000000] hover:text-gray-700 ${
                    isActive ? "w-full border-b-2 border-b-[#000000]" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-center ml-16 lg:hidden">
        <Link
          to="/"
          className="text-xl text-[#000000] lg:text-3xl font-semibold"
        >
          Xenix Mart
        </Link>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="text-[#000000] m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow text-xl"
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 text-black ${
                      isActive ? "border-b-2 border-black" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {authLink}
          </ul>
        </div>

        <ul className="menu-horizontal px-1 gap-7 hidden text-sm lg:flex text-black">
          {authLink}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
