import { useEffect } from 'react';
import { Link } from 'react-scroll';
import Constants from '../../core/constants';

function CurrSetup({ compName = 'NONE', tagData, compId, domain }) {
  const screenshotUrl = Constants.urls.screenshotUrl + '/' + domain;
  useEffect(() => {
    // if (compId);
  }, [compId]);
  return (
    <div className='bg-tuna h-full overflow-hidden'>
      <main className='w-11/12  lg:w-9/12 py-16 mx-auto flex flex-row items-center justify-center'>

        {/* Desktop */}

        <div className='hidden md:flex md:flex-row md:items-center md:justify-around lg:justify-between md:max-w-screen-lg md:mx-auto'>
          {/* <div className='md:w-4/12 lg:w-8/12 text-center'>
            <p className='bg-white text-black rounded-md p-5 text-left break-words font-mono'>{tagData.tag || 'asf'}</p>
            <br />

            <p className=' font-bold text-white'>Amp tags from {compName}</p>
          </div> */}
          <div className='md:w-50 lg:w-80 2xl:w-96 flex flex-col items-center'>
          <h1 className=' font-extrabold text-white text-center mb-14 text-4xl md:text-4xl'>
          <span className='block xl:inline'>{compName}'s Current Setup :</span>
        </h1>
            <img className='w-full rounded-lg' src={screenshotUrl} alt='' />
            <br />
            <p className=' font-bold text-white text-center xl:text-xl'>Screenshot from {compName}</p>
          </div>
        </div>
        <div className='mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg 2xl:text-xl lg:mx-0 text-center'>
           For this report, our audit team checked for the following parameters:
            <br />
            <br />
            <ul className='text-white list-disc mx-10 text-left md:items-center inline-block'>
              <li className='py-1'>
                <Link to='intro' spy={true} smooth={true}>
                Implementation of Header Bidding
                </Link>
              </li>
              <li className='py-1'>
                <Link to='intro' spy={true} smooth={true}>
                Number of demand partners
                </Link>
              </li>
              <li className='py-1'>
                <Link to='intro' spy={true} smooth={true}>
                Enablement of Bid Caching
                </Link>
              </li>
              <li className='py-1'>
                <Link to='intro' spy={true} smooth={true}>
                Implementation of multi-size ad requests
                </Link>
              </li>
              <li className='py-1'>
                <Link to='intro' spy={true} smooth={true}>
                Implementation of  multi-format ad requests
                </Link>
              </li>
              <li className='py-1'>
                <Link to='intro' spy={true} smooth={true}>
                Whether Instream Video ads are running
                </Link>
              </li>
              <li className='py-1'>
                <Link to='intro' spy={true} smooth={true}>
                Implementation of an AdBlock recovery setup
                </Link>
              </li>
              <li className='py-1'>
                <Link to='intro' spy={true} smooth={true}>
                Amazon Integration
                </Link>
              </li>
              <li className='py-1'>
                <Link to='intro' spy={true} smooth={true}>
                Enablement of Consent Management module
                </Link>
              </li>
            </ul>
          </div>

        {/* Mobile */}

        <div className=' w-full flex flex-col-reverse items-center justify-center mx-auto md:hidden'>
          {/* ' <div className="w-80 text-center">
            <p className="bg-white rounded-md p-5 text-left break-words font-mono">
              {tagData.tag}
            </p>
            <br />
            <p className=" font-bold text-white">Amp tags from {compName}</p>
          </div>' */}
          <div className='flex flex-col mb-10 items-center'>
            <img className='w-60 rounded-lg' src={screenshotUrl} alt='' />
            <br />
            <p className=' font-bold text-white'>Screenshot from {compName}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CurrSetup;
