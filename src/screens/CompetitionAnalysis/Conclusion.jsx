// import React, { useState, useEffect } from "react";

// import { Cards } from "../../components";
// import { setPropData } from "../../core/utils";

import ResultsSvg from "../../assets/results.svg";
import { CompetitorTable } from "../../components";
function Conclusion({ tagData, competitorDetails }) {
  // const [cardsArr, setCardsArr] = useState([]);

  // useEffect(() => {
  //   if (companyDetails) setPropData(companyDetails, setCardsArr);
  // }, [companyDetails]);
  let baseScore = 60;

  if (tagData.sticky === true) {
    baseScore += 3.8;
  }
  if (tagData.refresh === true) {
    baseScore += 4.4;
  }
  if (tagData.rtc === true) {
    baseScore += 4.1;
  }
  if (tagData.multi === true) {
    baseScore += 3.4;
  }
  if (tagData.consent === true) {
    baseScore += 2.4;
  }
  if (tagData.dcp.includes("doubleclick")) {
    baseScore += 2.7;
  }

  return (
    <div className="h-full bg-sunsetOrange overflow-hidden flex flex-row items-center justify-center">
      <div id="conclusion" className="pb-8 sm:pb-16 md:pb-20">
        <main className="mt-10 mx-auto px-4 flex flex-row items-center gap-x-4 justify-between sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
          <div className="text-center">
            <h1 className="text-white text-4xl  md:text-7xl font-extrabold">
              <span className="block xl:inline">Competition Analysis</span>
            </h1>
            <br />

            <br />

            <div className="sm:flex sm:flex-col lg:flex lg:flex-row items-center justify-between max-w-xs md:max-w-screen-lg">

              <div className="image w-full md:w-1/2"><img className="w-full" src={ResultsSvg} /></div>
              <div className="w-full md:w-1/2 lg:text-left text-center">
                <p className="text-white text-xl px-2 lg:px-16 pb-10">
                  On the basis of the extensive audit, we have pored through your
                  website on each area relevant to AMP ads setup, and then computed
                  your score along with your competitors.
                </p>
              </div>

            </div>

            <CompetitorTable
              tagData={tagData}
              competitorDetails={competitorDetails}
            />
          </div>

          {/* <div className="divide-y-2 rounded-md my-10 px-10 sm:w-full md:w-10/12 lg:w-9/12 h-1/2 bg-white">
            <div className="flex flex-row items-center justify-between py-5">
              <p className="text-sunsetOrange text-left text-xl font-bold">
                Highlights :
              </p>
              <p className="text-tuna text-xl hidden lg:block">
                <b>{companyDetails?.properties.name}</b> is currently using{" "}
                <b>{companyDetails?.properties.amp_component_type}</b>
              </p>
            </div>

            <div>
              <Cards cardsArr={cardsArr} />
            </div>
          </div> */}
        </main>
      </div>
    </div>
  );
}

export default Conclusion;
