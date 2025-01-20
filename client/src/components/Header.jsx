import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import useMobile from "../hooks/useMobile";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  return (
    <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white">
      {!(isMobile && isSearchPage) && (
        <div className="container mx-auto flex justify-between items-center px-2">
          {/* logo */}
          <div className="h-full">
            <Link to="/" className="h-full flex justify-center items-center">
              <img
                src={logo}
                width={170}
                height={60}
                alt="logo"
                className="hidden lg:block"
              />
              <img
                src={logo}
                width={120}
                height={60}
                alt="logo"
                className="lg:hidden"
              />
            </Link>
          </div>
          {/* end logo */}
          {/**Search */}
          <div className="hidden lg:block">
            <Search />
          </div>
          {/** end Search */}

          {/**login and my cart */}
          <div>
            {/**user icons display in only mobile version**/}
            <button className="text-neutral-600 lg:hidden">
              <FaRegCircleUser size={26} />
            </button>
            {/**Desktop screens**/}
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/login" className="text-lg px-2">
                Login
              </Link>
              <button className="flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded text-white">
                {/**add to card icons */}
                <div className="animate-bounce">
                  <BsCart4 size={26} />
                </div>
                <div className="font-semibold">
                  <p>1 items</p>
                  <p>total price</p>
                </div>
              </button>
              
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-2 lg:hidden">
        <Search />
      </div>
    </header>
  );
};

export default Header;
