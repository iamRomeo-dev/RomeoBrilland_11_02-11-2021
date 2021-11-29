import { StarFilledIcon } from "./Icons";
import { StarOutlinedIcon } from "./Icons";

export const DisplayStars = ({ rating }) => {
  console.log(rating);
  return (
    <>
      {rating === "0" && (
        <div className="flex">
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
        </div>
      )}

      {rating === "1" && (
        <div className="flex">
          <StarFilledIcon />
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
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
        </div>
      )}
      {rating === "4" && (
        <div className="flex">
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarOutlinedIcon />
        </div>
      )}
      {rating === "5" && (
        <div className="flex">
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
        </div>
      )}
    </>
  );
};
