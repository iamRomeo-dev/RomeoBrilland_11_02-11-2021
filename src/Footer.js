import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LogoWhite } from "./Icons";

class Footer extends Component {
  render() {
    return (
      <div className="bg-black flex flex-col justify-center items-center gap-6 py-8 mt-6">
        <Link to="/">
          <LogoWhite />
        </Link>
        <div className="text-white">© 2020 Kasa. All rigths reserved</div>
      </div>
    );
  }
}
export default Footer;
