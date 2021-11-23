import { useState } from "react";
import { RightArrowIcon } from "./Icons";
import { LeftArrowIcon } from "./Icons";

export const SingleBanner = ({ pictures }) => {
  const [selected, setSelected] = useState(0);
  console.log("pictures", pictures);
  const handleNextPicture = () => {
    setSelected((prev) => {
      if (prev === pictures.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handlePreviousPicture = () => {
    setSelected((prev) => {
      if (prev === 0) {
        return prev + (pictures.length - 1);
      } else {
        return prev - 1;
      }
    });
  };
  console.log(pictures);
  return (
    <div className="relative">
      <img
        src={pictures[selected]}
        alt="SingleBanner"
        className="object-cover h-72 w-full rounded-xl"
      />
      <div
        onClick={handlePreviousPicture}
        className="absolute left-2 top-1/2 -translate-y-1/2"
      >
        {/* Add condition if only one picture, so no need the arrows */}
        {pictures.length != 1 && <LeftArrowIcon />}
      </div>
      <div
        onClick={handleNextPicture}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        {pictures.length != 1 && <RightArrowIcon />}
      </div>
    </div>
  );
};
