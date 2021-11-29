import React, { Component } from "react";
import { StarFilledIcon } from "./Icons";
import { StarOutlinedIcon } from "./Icons";

export class DisplayStars extends Component {
  render() {
    const { rating } = this.props;
    return (
      <>
        {rating === "0" && (
          <div className="flex">
            <StarOutlinedIcon className="text-red-500 bg-blue-500" />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
          </div>
        )}

        {rating === "1" && (
          <div className="flex">
            <StarFilledIcon className="#f87171" />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
          </div>
        )}
        {rating === "2" && (
          <div className="flex">
            <StarFilledIcon />
            <StarFilledIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
          </div>
        )}
        {rating === "3" && (
          <div className="flex">
            <StarFilledIcon className="text-red-500 bg-blue-500" />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
          </div>
        )}
        {rating === "4" && (
          <div className="flex">
            <StarFilledIcon className="text-red-500 bg-blue-500" />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarOutlinedIcon />
          </div>
        )}
        {rating === "5" && (
          <div className="flex">
            <StarFilledIcon className="text-red-500 bg-blue-500" />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
          </div>
        )}
      </>
    );
  }
}
