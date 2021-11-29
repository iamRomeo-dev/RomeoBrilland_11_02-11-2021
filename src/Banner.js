import React, { Component } from "react";
import bannerImg from "./images/banner.png";

class Banner extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="relative">
        <img
          src={bannerImg}
          alt={bannerImg}
          className="w-full mt-4 rounded-xl filter brightness-75"
        />
        {/* left: 50%, transform: translateX(-50%), top: 50%, transform: translateY(-50%) */}
        <h2 className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-small md:text-3xl font-semibold">
          {title}
        </h2>
      </div>
    );
  }
}
export default Banner;
