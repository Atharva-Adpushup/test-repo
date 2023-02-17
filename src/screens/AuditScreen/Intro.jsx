import HeroImage from '../../assets/Intro.svg';

import { Link } from 'react-scroll';
function Introduction({ tagData }) {
  return (
    <div className='bg-sunsetOrange h-full overflow-hidden  block md:hidden'>
      <main className=' w-10/12 lg:w-9/12 py-16 mx-auto flex gap-x-10 items-center justify-center'>
        <div className='text-justify'>
          <h1 className='tracking-tight font-extrabold text-white mb-10 text-6xl  lg:text-7xl'>
            <span className='block xl:inline'>Introduction</span>
          </h1>
          <p className='mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
            Offering a good user experience while optimizing your ad revenues is a difficult feat to achieve. In that spirit, as a part of our Programmatic
            Yield Index program, we conducted a thorough and objective analysis of your programmatic setup and found that there are certain key optimization
            areas.
          </p>
          <br />
          <div className='text-center'>
            <p className='text-white text-2xl font-bold'>Programmatic 360° Ad Audit Score: {tagData['Final Score']}</p>
          </div>
          <br />
        </div>

        {/* <div className="lg:w-1/2 hidden lg:block mt-20">
          <img src={HeroImage} alt="Audit" />
        </div> */}
      </main>
    </div>
  );
}

export default Introduction;
