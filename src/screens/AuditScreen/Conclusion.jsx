// import React, { useState, useEffect } from "react";

// import { Cards } from "../../components";
// import { setPropData } from "../../core/utils";

import ResultsSvg from '../../assets/results.svg';
import { FeatureTable } from '../../components';
function Conclusion({ tagData }) {
  // const [cardsArr, setCardsArr] = useState([]);

  // useEffect(() => {
  //   if (companyDetails) setPropData(companyDetails, setCardsArr);
  // }, [companyDetails]);

  return (
    <div className='h-full bg-sunsetOrange overflow-hidden flex flex-row items-center justify-center'>
      <div id='conclusion' className='pb-8 sm:pb-16 md:pb-20'>
        <main className='mt-10 mx-auto max-w-7xl px-4 flex flex-row items-center gap-x-4 justify-between sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-white text-6xl  md:text-7xl font-extrabold'>
              <span className='block xl:inline'>Conclusion</span>
            </h1>
            <br />
            <img className='sm:w-96 sm:block lg:hidden mx-auto' src={ResultsSvg} alt='Results' />
            <br />
            <p className='text-white text-xl px-2 lg:px-16 pb-10'>
              On the basis of the extensive audit, we have pored through your website on each area relevant to programmatic ads setup, and then computed your
              score.
            </p>
            <p className='text-white text-3xl font-bold'>Programmatic 360° Ad Audit Score: <span className='text-3xl font-extrabold'>{tagData['Final Score']}/100</span></p>
            <FeatureTable tagData={tagData} />
          </div>

          {/* <img className=' hidden lg:block w-1/3 mt-20 mx-auto' src={ResultsSvg} alt='Results' /> */}

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
