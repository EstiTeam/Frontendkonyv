import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Ellenőrzi, hogy van-e bejelentkezett felhasználó
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Ha van user, akkor true, különben false
  }, []);

  return (
    <header className="lg:px-16 px-4 bg-gray-800 text-white flex flex-wrap items-center py-4 shadow-md ">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/" className="text-xl">
          Könyvek Tárháza
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-black-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            {!isLoggedIn ? (
              // Ha nincs bejelentkezve
              <>
                <li>
                  <Link to="/Login" className="md:p-4 py-3 px-0 block text-white">
                    Bejelentkezés
                  </Link>
                </li>
                <li>
                  <Link to="/Library" className="md:p-4 py-3 px-0 block text-white">
                    Könyvtár
                  </Link>
                </li>
              </> 
            ) : (
              // Ha be van jelentkezve
              <>
                <li>
                  <Link to="/Library" className="md:p-4 py-3 px-0 block text-white">
                    Könyvtár
                  </Link>
                </li>
                <li>
                  <Link to="/Newbook" className="md:p-4 py-3 px-0 block text-white">
                    Újkönyv
                  </Link>
                </li>
                <li>
                  <Link to="/logout" className="md:p-4 py-3 px-0 block text-white">
                    Kijelentkezés
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu