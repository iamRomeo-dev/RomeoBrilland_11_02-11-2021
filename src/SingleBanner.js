import { useState } from "react";
import { RightArrowIcon } from "./Icons";
import { LeftArrowIcon } from "./Icons";

export const SingleBanner = ({ pictures }) => {
  const [selected, setSelected] = useState(0);

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
        <LeftArrowIcon />
      </div>
      <div
        onClick={handleNextPicture}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        <RightArrowIcon />
      </div>
    </div>
  );
};
