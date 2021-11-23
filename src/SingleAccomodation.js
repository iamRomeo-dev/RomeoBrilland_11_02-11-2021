import React, { Component } from "react";
import Header from "./Header";
import { DisplayStars } from "./DisplayStars";
import { data } from "./data";
import { LeftArrowIcon, RightArrowIcon } from "./Icons";

export default class SingleAccomodation extends Component {
  SingleAccomodationDatas = () => {
    return data.filter((accomodation) => {
      return accomodation.id === this.props.match.params.id;
    })[0];
  };

  render() {
    // console.log("toto", this.SingleAccomodationDatas());
    return (
      <>
        <>
          <Header />
          {/* <SingleBanner /> */}
          <div className="relative">
            <img
              src={this.SingleAccomodationDatas().pictures[0]}
              alt="SingleBanner"
              className="object-cover h-72 w-full rounded-xl"
            />
            <div
              // onClick={handlePreviousPicture}
              className="absolute left-2 top-1/2 -translate-y-1/2"
            >
              {this.SingleAccomodationDatas().pictures.length !== 1 && (
                <LeftArrowIcon />
              )}
            </div>
            <div
              // onClick={handleNextPicture}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {this.SingleAccomodationDatas().pictures.length !== 1 && (
                <RightArrowIcon />
              )}
            </div>
          </div>
          {/* <SingleBanner /> */}

          <div className="sm:flex justify-between flex-wrap mt-6">
            <div>
              <div>
                <h1 className="text-base md:text-3xl text-red-400 font-normal">
                  {this.SingleAccomodationDatas().title}
                </h1>
                <h3 className="text-xs md:text-lg text-red-400 font-normal">
                  {this.SingleAccomodationDatas().location}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2 mt-2">
                {this.SingleAccomodationDatas().tags.map((tag, index) => (
                  <li className="text-white text-xs md:text-lg bg-red-500 rounded-3xl px-4 md:px-8">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div class="flex flex-row-reverse items-center justify-between gap-4">
              <div className="flex justify-center items-center">
                <h3 className="text-xs md:text-lg text-red-400 font-normal">
                  {this.SingleAccomodationDatas().host.name}
                </h3>
                <div class="rounded-full bg-gray-200 h-12 w-12 ml-2 flex items-center justify-center"></div>
              </div>
              <DisplayStars rating={this.SingleAccomodationDatas().rating} />
            </div>
          </div>
        </>
      </>
    );
  }
}
