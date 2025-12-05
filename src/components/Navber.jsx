import { Link } from "react-router";

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
        <Link to={"/home"}>Home</Link>
      </li>
      <li>
        <Link to={"/Products"}>Shop</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/features"}>Features</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="text-3xl font-semibold">
          Xenix Mart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
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

        <ul className=" menu-horizontal px-1 gap-7 hidden text-xl lg:flex">
          {" "}
          {authLink}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
