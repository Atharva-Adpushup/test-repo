import '../../styles/HeroSection.css';
import { Link } from 'react-scroll';
import HeroImage from '../../assets/Intro.svg';
import useWindowSize from '../../core/hooks/useWindowSize';

function HeroSection({ compName, tagData }) {
  const { width: innerWidth } = useWindowSize();

  const isMobile = innerWidth < 560;

  return (
    <div className='min-h-screen bg-white overflow-hidden flex flex-col justify-between'>
      <div className='color-rect sunsetOrange'></div>
      <div className='color-rect cornflowerBlue'></div>
      <div className='color-rect sunglow'></div>
      <div className='color-rect tuna'></div>

      <div></div>

      <div className='sm:max-w-4xl md:max-w-full lg:max-w-4xl pb-10 ml-5 md:ml-0 lg:ml-20 md:w-full lg:w-auto '>
        <div className='pb-16 md:pb-20 lg:pb-28 xl:pb-32'>
          <main className='mx-auto px-4 sm:px-6 lg:px-8' style={{ marginTop: innerWidth >= 768 && innerWidth <= 1200 ? '15rem' : '10rem' }}>
            <div className='sm:text-center lg:text-left pt-10'>
              <h1 className='text-tuna text-6xl md:text-6px lg:text-8xl font-extrabold'>
                <p className=' uppercase text-4xl md:text-7xl lg:text-4xl mt-5 ml-0 lg:ml-2 text-center'>{compName}</p>
                <p
                  className='block xl:inline uppercase'
                  style={{
                    fontSize: innerWidth >= 1200 ? '6rem' : innerWidth >= 768 ? '5rem' : '2.5rem',
                    lineHeight: isMobile ? '4rem' : innerWidth >= 768 && innerWidth <= 1200 ? '7rem' : 'inherit',
                    paddingTop: isMobile ? '1rem' : innerWidth >= 768 ? '3rem' : 0,
                  }}
                >
                  Programmatic
                  <br />
                  Yield Index
                  <br /> 2022
                </p>
              </h1>
            </div>
          </main>
        </div>
      </div>
      <main className='hidden lg:flex w-12/12 lg:w-12/12 py-20 gap-x-10 p-8 text-center justify-center bg-sunsetOrange'>
        <div className='justify-center'>
          <h1 className='tracking-tight font-extrabold text-white mb-10 text-6xl 2xl:text-7xl'>
            <span className='block xl:inline'>Introduction</span>
          </h1>
          <p className='mt-3 w-full text-base text-white  2xl:text-xl lg:mx-0 text-justify'>
            Offering a good user experience while optimizing your ad revenues is a difficult feat to achieve. In that spirit, as a part of our Programmatic
            Yield Index program, we conducted a thorough and objective analysis of your programmatic setup and found that there are certain key optimization
            areas.
          </p>
          <br />
          <div className='text-center'>
            <p className='text-white text-2xl font-bold'>Programmatic 360° Ad Audit Score: <span className='text-3xl font-extrabold'>{tagData['Final Score']}/100</span></p>
          </div>
          <br />
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
