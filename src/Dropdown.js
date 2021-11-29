import React, { Component } from "react";
import "./Dropdown.css";
import { CloseArrow, OpenArrow } from "./Icons";

class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  toggleList = () => {
    this.setState((prevState) => ({
      isOpen: prevState.isOpen ? false : true,
    }));
  };

  render() {
    const { title, content } = this.props;
    const { isOpen } = this.state;
    console.log(content);
    return (
      <div className="w-full h-full min-w-300 rounded-md text-white text-xs md:text-lg bg-red-400 ">
        <h3
          onClick={() => this.toggleList()}
          className="flex justify-between px-4 md:px-8 py-2"
        >
          {title}
          <span>{isOpen ? <CloseArrow /> : <OpenArrow />}</span>
        </h3>

        {/* Si content (description) est un tableau alors UL sinon p */}
        {Array.isArray(content) ? (
          <ul
            className={
              isOpen
                ? "blockc bg-gray-100 text-red-400 px-8 py-10 rounded-b-md"
                : "hidden"
            }
          >
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p
            className={
              isOpen
                ? "block bg-gray-100 text-red-400 px-8 py-10 rounded-b-md"
                : "hidden"
            }
          >
            {content}
          </p>
        )}
      </div>
    );
  }
}

export default Dropdown;
