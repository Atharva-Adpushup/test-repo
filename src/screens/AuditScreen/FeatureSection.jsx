import React, { useEffect, useState } from 'react';

import { Findings, FindingsLoader } from '../../components';

import { setPropDataFromTags } from '../../core/utils';

function FeatureSection({ tagData }) {
  const [propertiesArr, setPropertiesArr] = useState([]);

  useEffect(() => {
    if (tagData) setPropDataFromTags(tagData, setPropertiesArr);
  }, [tagData]);

  return (
    <div className=' bg-white h-full overflow-hidden'>
      <main className='w-10/12 lg:w-9/12 py-16 mx-auto'>
        <div className='sm:text-center lg:text-left'>
          <h1 className=' tracking-tight font-extrabold text-tuna text-6xl md:text-7xl'>
            <span className='block xl:inline'>Our  </span>
            <span className='block text-sunsetOrange xl:inline'>Findings</span>
          </h1>
        </div>
        <div className='mt-10'>{tagData ? <Findings propertiesArr={propertiesArr} compName={tagData['Company Name']} /> : <FindingsLoader />}</div>
      </main>
    </div>
  );
}

export default FeatureSection;
