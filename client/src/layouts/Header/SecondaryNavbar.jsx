import React, { useState } from "react";
import Toggle from "../../components/base/Toggle";
import { assets } from "../../assets/assets";
import { NavLink, Link } from "react-router";
import { navlinks } from "../../utils/navlinks";

const SecondaryNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [date] = useState(() => {
    const date = new Date(Date.now()).toLocaleDateString("en-yg", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return date;
  });

  return (
    <React.Fragment>
      <header className="bg-white dark:bg-gray-600 rounded-t-xl">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 sm:flex sm:items-center sm:gap-12 justify-start lg:px-2">
              <Link to={"/"} className="block text-teal-600 dark:text-teal-300">
                <span className="sr-only">Home</span>
                <p className=" prata-regular text-lg">EveryDayLux</p>
              </Link>
              <div className="hidden lg:block sm:text-md border-b border-b-green-400 rounded-md px-6 text-slate-200">
                {date.toLowerCase()}
              </div>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="hidden md:inline-block">
                <img
                  src={assets.search_icon}
                  className="w-5 cusor-pointer"
                  alt=""
                />
              </div>
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {navlinks &&
                    Array.isArray(navlinks) &&
                    navlinks?.map((link) => {
                      return (
                        <li key={link.name}>
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              isActive
                                ? "!text-red-600 uppercase"
                                : "text-gray-500 capitalize transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                            }
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      );
                    })}
                </ul>
              </nav>

              {/* theme togge and cart */}
              <div className=" flex justify-between items-center space-x-3">
                <div className="hidden md:block">
                  <Toggle />
                </div>
                <div className="hidden  md:block ">
                  <div className=" relative">
                    <img
                      src={assets.cart_icon}
                      className="w-7 cursor-pointer"
                      alt=""
                    />
                    <div className="badge badge-error badge-xs  absolute top-0 left-4 w-1">
                      <span className="text-[10px]">+9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* sm:toggle bar */}
              <div>
                <div className="flex justify-between items-center space-x-4">
                  <button
                    className="inline md:hidden text-green-500 cursor-pointer"
                    onClick={() => setOpen(!isOpen)}
                  >
                    <img src={assets.menu_icon} className="w-5" alt="" />
                  </button>
                </div>
                {isOpen && (
                  <>
                    <div className="inline md:hidden absolute end-0 top-[60px] z-10 px-2  mt-0.5  w-full rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
                      <div className="p-2 ">
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                          role="menuitem"
                        >
                          My profile sss
                        </a>

                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                          role="menuitem"
                        >
                          My data
                        </a>

                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                          role="menuitem"
                        >
                          Team settings
                        </a>

                        <form method="POST" action="#">
                          <button
                            type="submit"
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                            role="menuitem"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                              />
                            </svg>
                            Logout
                          </button>
                        </form>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* lg:toggle bar */}
              <div className="relative hidden md:block">
                <button
                  type="button"
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
                  onClick={() => setOpen(!isOpen)}
                >
                  {/* <span className="sr-only">Toggle dashboard menu</span> */}

                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="size-10 object-cover"
                  />
                </button>

                {isOpen && (
                  <>
                    <div
                      className="absolute end-0 z-10 mt-0.5 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
                      role="menu"
                    >
                      <div className="p-2">
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                          role="menuitem"
                        >
                          My profile lll
                        </a>

                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                          role="menuitem"
                        >
                          My data
                        </a>

                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                          role="menuitem"
                        >
                          Team settings
                        </a>

                        <form method="POST" action="#">
                          <button
                            type="submit"
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                            role="menuitem"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                              />
                            </svg>
                            Logout
                          </button>
                        </form>
                      </div>
                    </div>
                  </>
                )}

                <div className="block md:hidden">
                  <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default SecondaryNavbar;
