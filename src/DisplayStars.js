import { StarFilledIcon } from "./Icons";
import { StarOutlinedIcon } from "./Icons";

export const DisplayStars = ({ rating }) => {
  console.log(rating);
  return (
    <>
      {rating === "0" && (
        <div class="flex">
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
        </div>
      )}

      {rating === "1" && (
        <div class="flex">
          <StarFilledIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
        </div>
      )}
      {rating === "2" && (
        <div class="flex">
          <StarFilledIcon />
          <StarFilledIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
        </div>
      )}
      {rating === "3" && (
        <div class="flex">
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
        </div>
      )}
      {rating === "4" && (
        <div class="flex">
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarOutlinedIcon />
        </div>
      )}
      {rating === "5" && (
        <div class="flex">
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
