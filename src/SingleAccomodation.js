import React, { Component } from "react";
import { DisplayStars } from "./DisplayStars";
import { data } from "./data";
import { LeftArrowIcon, RightArrowIcon } from "./Icons";
import Dropdown from "./Dropdown";
import { Redirect } from "react-router";

export default class SingleAccomodation extends Component {
  // this.state.index sera l'index de départ, donc 0. Donc affichera la premiere photo
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  // Fonction qui affiche les données filtré par id qui est récupéré dans l'url
  SingleAccomodationDatas = () => {
    const logement = data.filter((accomodation) => {
      return accomodation.id === this.props.match.params.id;
    });
    if (!logement[0]) {
      this.props.history.push("/page404");
    } else {
      return logement[0];
    }
  };

  // Index +1 par rapport à la longueur du tableau
  HandleNextPicture = () => {
    this.setState({
      index:
        (this.state.index + 1) %
        this.SingleAccomodationDatas()?.pictures.length,
    });
  };

  // Index -1 par rapport à la longueur du tableau sauf si index = 0 alors on set le state à la longueur du tableau -1, pour repartir à la dernière photo
  HandlePreviousPicture = () => {
    if (this.state.index === 0) {
      return this.setState({
        index: this.SingleAccomodationDatas()?.pictures.length - 1,
      });
    } else {
      this.setState({
        index:
          (this.state.index - 1) %
          this.SingleAccomodationDatas()?.pictures.length,
      });
    }
  };

  render() {
    // console.log(this.SingleAccomodationDatas());

    const item = this.SingleAccomodationDatas()?.pictures[this.state.index];

    return (
      <>
        {/* <SingleBanner /> */}
        <div className="relative">
          <img
            src={item}
            alt="SingleBanner"
            className="object-cover h-72 w-full rounded-xl"
          />
          <div
            onClick={this.HandlePreviousPicture}
            className="absolute left-2 top-1/2 -translate-y-1/2"
          >
            {this.SingleAccomodationDatas()?.pictures.length !== 1 && (
              <LeftArrowIcon />
            )}
          </div>
          <div
            onClick={this.HandleNextPicture}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {this.SingleAccomodationDatas()?.pictures.length !== 1 && (
              <RightArrowIcon />
            )}
          </div>
        </div>
        {/* <SingleBanner /> */}

        <div className="sm:flex justify-between flex-wrap mt-6">
          <div>
            <div>
              <h1 className="text-base md:text-3xl text-red-400 font-normal">
                {this.SingleAccomodationDatas()?.title}
              </h1>
              <h3 className="text-xs md:text-lg text-red-400 font-normal">
                {this.SingleAccomodationDatas()?.location}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2 mt-2">
              {this.SingleAccomodationDatas()?.tags.map((tag, index) => (
                <li
                  key={index}
                  className="text-white text-xs md:text-lg bg-red-400 rounded-3xl px-4 md:px-8"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row-reverse sm:flex-col items-center justify-between gap-4">
            <div className="flex justify-center items-center">
              <h3 className="text-xs md:text-lg text-red-400 font-normal">
                {this.SingleAccomodationDatas()?.host.name}
              </h3>

              <img
                src={this.SingleAccomodationDatas()?.host.picture}
                alt={this.SingleAccomodationDatas()?.host.name}
                className="object-cover rounded-full bg-gray-200 h-12 w-12 ml-2 flex items-center justify-center"
              />
            </div>
            <DisplayStars rating={this.SingleAccomodationDatas()?.rating} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
          <Dropdown
            title="Description"
            content={this.SingleAccomodationDatas()?.description}
          />
          <Dropdown
            title="Equipements"
            content={this.SingleAccomodationDatas()?.equipments}
          />
        </div>
      </>
    );
  }
}
