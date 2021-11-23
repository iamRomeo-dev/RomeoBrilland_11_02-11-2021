import React, { Component } from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

class Grid extends Component {
  render() {
    return (
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:bg-gray-100 rounded-xl gap-12 md:p-12 mt-24">
        {data.map((accomodation) => {
          return (
            <li key={accomodation.id}>
              <Link
                to={`/accomodation/${accomodation.id}`}
                className="relative h-60 col-span-1 flex flex-col  md:h-72 lg:h-80 xl:h-96"
              >
                <img
                  src={accomodation.cover}
                  alt={accomodation.title}
                  className="object-cover h-full rounded-xl"
                />
                <span className="absolute bottom-5 left-5 text-sm font-normal tracking-normal text-white tk-brandon-grotesque">
                  {accomodation.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Grid;
