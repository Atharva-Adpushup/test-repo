import { InformationCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";

function PopoverIcon({ svgIcon, title, content }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
    >
      <InformationCircleIcon className="animate-bounce w-7 mx-2 mt-4 " />
      {isVisible && (
        <>
          <div className="absolute font-medium bg-sunsetOrange text-white lg:w-1/4 text-lg p-5 rounded-md shadow-md ml-10 -mt-16 transition duration-500 ease-in-out transform hidden lg:block ">
            {content}
          </div>
          <div className="absolute font-medium bg-sunsetOrange text-white w-10/12  text-lg p-5 rounded-md shadow-md transition duration-500 ease-in-out transform sm:block lg:hidden left-6 mt-5 ">
            {content}
          </div>
        </>
      )}
    </div>
  );
}

export default PopoverIcon;
