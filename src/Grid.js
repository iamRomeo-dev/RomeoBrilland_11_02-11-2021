import React, { Component } from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

class Grid extends Component {
  render() {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:bg-gray-100 rounded-xl gap-12 md:p-12 mt-24">
        {data.map((accomodation) => {
          return (
            <li key={accomodation.id}>
              <Link to={`/accomodation/${accomodation.id}`}>
                <div className="relative h-60 col-span-1 flex flex-col md:h-72 lg:h-80 xl:h-96 rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-xl"></div>
                  <img
                    src={accomodation.cover}
                    alt={accomodation.title}
                    className="object-cover h-full rounded-xl"
                  />
                  <span className="absolute bottom-5 left-5 text-sm font-normal tracking-normal text-white tk-brandon-grotesque">
                    {accomodation.title}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Grid;
