import Swal from "sweetalert2";
import useAuth from "../../Custom Hooks/useAuth";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/Logos/LightLogo-removebg-preview.png";
import useUserDetails from "../../Custom Hooks/useUserDetails";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { loadedUser } = useUserDetails();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Success!", "You have logged out successfully!", "success");
      })
      .catch((error) => console.log(error.code));
  };

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("night");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  console.log(loadedUser);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-primary px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      {loadedUser?.role === "librarian" && (
        <li>
          <NavLink
            to="/addBooks"
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-primary px-3 py-2 text-white rounded-md"
                : isPending
                ? "pending"
                : ""
            }
          >
            Add Books
          </NavLink>
        </li>
      )}

      {loadedUser?.role === "librarian" && (
        <li>
          <NavLink
            to="/allBooks"
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-primary px-3 py-2 text-white rounded-md"
                : isPending
                ? "pending"
                : ""
            }
          >
            All Books
          </NavLink>
        </li>
      )}

      <li>
        <NavLink
          to="/borrowedBooks"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-primary px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="pt-2 lg:px-4 lg:py-4 xl:pt-2 xl:px-0">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow rounded-box w-52 text-primary hover:text-primary-hover"
            >
              {links}
            </ul>
          </div>
          <img
            src={logo}
            className="hidden md:block w-[230px] md:w-[270px] lg:w-[220px] xl:w-[270px]"
          ></img>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-6 text-primary font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="flex items-center gap-3">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-white dark:bg-primary"
                  >
                    <li>
                      <a className="text-lg font-medium hover:bg-primary dark:text-white hover:text-white dark:hover:bg-[#273444]">
                        {user.displayName}
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={handleLogOut}
                        className="text-lg font-medium hover:bg-primary hover:text-white dark:text-white dark:hover:bg-[#273444] "
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <button className="bg-primary hover:bg-[#1083A7] px-4 py-3 rounded-lg text-white">
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </div>
          {/* Theme Toggle Button */}
          <div className="ml-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-9 h-9 md:w-10 md:h-10 text-[#13A5C9]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-9 h-9 md:w-10 md:h-10 text-[#13A5C9]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
