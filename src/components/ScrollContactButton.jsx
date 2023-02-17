import React from 'react';
import Constants from "../core/constants";
// import { useGA4React } from "ga-4-react";
import ReactGA from 'react-ga';

const ScrollContactButton = ({compID}) => {
    const handleCTAClick = ()=>{
        // ga.event('CTA Clicked','AMP Audit',92378454)
    
        const parameters = new URLSearchParams(window.location.search);
        const value = parameters.get('contact');
        ReactGA.event({
          category: 'Amp Audit Report' ,
          action: `${value}`,
          label:`${compID}`
        });
      }
  return (
    <div className='fixed bottom-10 z-50 right-5'>
      <a onClick={handleCTAClick} href={Constants.links.requestDemoLink} className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
        <p className="w-full shadow md:w-50 flex gap-x-4 items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-tuna md:py-4 md:text-lg md:px-10  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            Speak to us
        </p>
      </a>
    </div>
  )
}

export default ScrollContactButton;
