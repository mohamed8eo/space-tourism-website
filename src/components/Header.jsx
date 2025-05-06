import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isopen, setisopen] = useState(false); // Open and close nav menu on mobile
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Home", path: "/home", number: "00" },
    { label: "Destination", path: "/destination", number: "01" },
    { label: "Crew", path: "/crew", number: "02" },
    { label: "Technology", path: "/technology", number: "03" },
  ];

  return (
    <>
      <header className="pt-6 pl-6 lg:pt-10 sm:pt-0 sm:pl-6 flex items-center -ml-[32px] lg:w-[1440px] lg:h-[136px] sm:w-[804px] sm:h-[96px]">
        <div className="pr-6 pl-6 sm:pl-16 sm:pr-0 flex items-center gap-16 w-[736px] h-[46px] z-20 relative justify-between">
          {/* Updated paths using import.meta.env.BASE_URL */}
          <img
            className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]"
            src={`${import.meta.env.BASE_URL}assets/shared/logo.svg`}
            alt="star logo"
          />
          <img
            className="toggle sm:hidden cursor-pointer"
            src={`${import.meta.env.BASE_URL}assets/shared/icon-hamburger.svg`}
            alt="hamburger toggle menu"
            onClick={() => setisopen(!isopen)}
          />
          <img
            className="bg-line opacity-25 lg:block hidden"
            src={`${import.meta.env.BASE_URL}assets/shared/line.svg`}
            alt="straight line"
          />
        </div>
        <div className="bg-ul w-[736px] h-[96px] backdrop-blur-[80px] relative sm:block hidden">
          <ul className="flex items-center lg:pl-16 lg:pr-16 lg:w-[736px] sm:w-[640px] h-[96px] gap-12 justify-end relative">
            {navItems.map(({ label, path, number }) => (
              <li
                key={path}
                className={`flex items-center justify-center h-[96px] relative overflow-hidden ${
                  currentPath === path ? "active" : ""
                }`}
              >
                <Link
                  className="text-white text-base gap-3 flex overflow-hidden"
                  to={path}
                >
                  <span className="tracking-[2.7px] font-bold">{number}</span>
                  <span className="tracking-[2px]">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <ul
        className={`${
          isopen ? "block" : "hidden"
        } mobile-nav color-nav text-white absolute top-0 right-0 z-200 w-[254px] h-[812px] pl-8 backdrop-blur-[80px]`}
      >
        <div className="grid gap-[45px] relative">
          <div className="pt-8 pb-8 w-[222px] h-[85px] grid justify-end relative">
            <img
              className="pr-6 cursor-pointer"
              src={`${import.meta.env.BASE_URL}assets/shared/icon-close.svg`}
              alt="icons close"
              onClick={() => setisopen(!isopen)}
            />
          </div>
          <div className="w-[222px] h-[172px] gap-8 grid relative">
            {navItems.map(({ label, path, number }) => (
              <li className={`h-[19px] relative`} key={path}>
                <Link
                  className={`flex gap-3 relative ${
                    currentPath === path ? "active-a" : ""
                  }`}
                  to={path} // Use "to" instead of "href"
                  onClick={() => setisopen(false)} // Close the menu after navigation
                >
                  <span className="tracking-[2px] text-[16px]">{number}</span>
                  <span className="tracking-[2px] text-[16px]">{label}</span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </>
  );
};

export default Header;