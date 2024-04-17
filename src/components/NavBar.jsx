
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div>
      <div className="navbar text-white font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link>
            <span className="md:text-2xl font-bold">TravelGuru</span>
          </Link>
          <div className="md:ml-14 flex items-center ">
            <CiSearch className="absolute left-[325px]"></CiSearch>
            <input
              type="text"
              placeholder="Search your destination here"
              className="pl-10 input-bordered border-white  relative input md:h-[40px] bg-opacity-20 md:w-[370px]  w-full max-w-xs placeholder:text-white"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <ul className="menu md:mr-10 space-x-6 menu-horizontal font-bold px-1">
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to='/login'>
            <button className="btn bg-[#F9A51A] border-none outline-none">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
