import React from "react";

function Cards({ cardsArr }) {
  return (
    <section className="container lg:px-6 py-4 mx-auto">
      <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3 ">
        {cardsArr.map((item, index) => {
          if (item.feature === "TestFeature") return null;
          return (
            <div
              key={index.toString()}
              className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800"
            >
              <div
                className={"bg-sunsetOrange p-3 mr-4 text-white rounded-full"}
              >
                {item.usingFeature === "true" || item.usingFeature === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <p className="mb-2 text-md font-bold text-tuna">
                  {item.feature === "DemandAnalysis"
                    ? "Demand Analysis"
                    : item.feature === "RTC"
                    ? "Client-side Header Bidding"
                    : item.feature === "Ad Refresh"
                    ? "Ad Refresh"
                    : item.feature === "Multisize Ads"
                    ? "Multisize Ad Request Support"
                    : item.feature === "Sticky Ads"
                    ? "Sticky Ads"
                    : item.feature === "Amp Analytics"
                    ? "Amp Analytics"
                    : null}
                </p>
                {/* <p className="text-sm font-normal text-tuna">
                  {item.usingFeature === "true" || item.usingFeature === true
                    ? `Great you have enabled ${item.feature}`
                    : `${item.feature} not enabled.`}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Cards;
