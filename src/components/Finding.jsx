import { PopoverIcon } from "./index";

function Finding({
  title,
  findings,
  recommendations,
  compName,
  image,
  popoverData,
  onLeft,
}) {
  return (
    <div
      id={title}
      className="p-4 lg:p-8  bg-white border-2 border-gray-200 rounded-lg shadow-sm"
    >
      <div
        className={
          onLeft
            ? "sm:flex sm:flex-col lg:flex lg:flex-row-reverse items-center justify-between gap-x-20"
            : "sm:flex sm:flex-col lg:flex lg:flex-row items-center justify-between gap-x-20"
        }
      >
        <img className=" lg:w-1/3 hidden lg:block" src={image} alt={title} />
        <div>
          <div className="mb-5 text-4xl lg:text-5xl flex flex-row pr-5 items-center font-extrabold text-sunsetOrange">
            {title}
            {popoverData?.length > 0 && <PopoverIcon content={popoverData} />}
          </div>
          <img
            className=" sm:w-1/2 lg:hidden md:hidden sm:block"
            src={image}
            alt={title}
          />

          <div className="flex flex-col">
            <p className="text-xl lg:text-2xl text-tuna font-bold">
              Key Findings
            </p>
            <ul className="list-disc lg:text-lg list-inside py-2">
              {findings.map((item, index) => (
                <li
                  key={index.toString()}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-xl lg:text-2xl text-tuna font-bold">
              Recommendations
            </p>
            <ul className="list-disc lg:text-lg list-inside py-2">
              {recommendations.map((item, index) => (
                <li
                  dangerouslySetInnerHTML={{ __html: item }}
                  className="list-item p-0"
                  key={index.toString()}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finding;
