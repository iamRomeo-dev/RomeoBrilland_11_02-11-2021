import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="relative bg-white mt-4">
        <div className="flex justify-between items-center py-6 ">
          <Link to="/">
            <img className="h-10 w-auto sm:h-14" src={logo} alt="logo" />
          </Link>
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/"
              className="whitespace-nowrap text-xs sm:text-base font-medium text-red-300 hover:text-gray-900"
            >
              Accueil
            </Link>
            <a
              href="/about"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center py-2 text-xs sm:text-base font-medium text-red-300"
            >
              A propos
            </a>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
