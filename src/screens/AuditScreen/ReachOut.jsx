import ReachOutImage from "../../assets/reachOut.svg";
import Constants from "../../core/constants";
// import { useGA4React } from "ga-4-react";
import ReactGA from 'react-ga';

function ReachOut({compID}) {

  // const ga = useGA4React();


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
    <div className="h-full bg-tuna overflow-hidden">
      <main id="reachOut" className="w-10/12 py-20 mx-auto flex items-center">
        <div className="lg:w-1/2  hidden lg:block">
          <img src={ReachOutImage} alt="Audit" />
        </div>

        <div className="mt-10 mx-auto">
          <div className="sm:text-center lg:text-left">
            <h1 className="	 text-white text-6xl  md:text-7xl  font-extrabold">
              <span className="block  xl:inline">Reach out to us</span>
            </h1>
            <br />
            <p className="mt-3 mb-10 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl text-center lg:mx-0">
              Thank you for taking the time to review this opportunity.
              <br /> <br /> Our team of Google Certified ad ops experts is proven to drive a
              revenue uplift of 30 to 40% or more.
              <br /> <br />
              This opportunity is a sample of improvements that we can make on
              your site. For any questions about the findings in this report,
              please feel free to reach out to us.
            </p>

            <a onClick={handleCTAClick} href={Constants.links.requestDemoLink} className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <p className="w-full shadow md:w-60  flex gap-x-4 items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-tuna bg-white hover:bg-sunsetOrange hover:text-white md:py-4 md:text-lg md:px-10  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                  Speak to us
                </p>
              </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ReachOut;
