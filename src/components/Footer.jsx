import AdpushupSymbol from "../assets/symbolWhite.png";
import AdpushupLogo from "../assets/textLogoWhite.png";
import { Socials } from "./index";

import ReactGA from 'react-ga';

function Footer(props) {

  const handleCTAClick = ()=>{
    // ga.event('CTA Clicked','AMP Audit',92378454)

    const parameters = new URLSearchParams(window.location.search);
    const value = parameters.get('contact');
    ReactGA.event({
      category: 'Amp Audit Report Footer' ,
      action: `${value}`,
    });
  }
  return (
    <div className="w-full bg-sunsetOrange text-white ">
      <div className="w-9/12 mx-auto py-12 grid  grid-cols-2  lg:grid-cols-6 gap-10">
        <div className=" col-span-2   flex flex-col space-y-4 items-start justify-start gap-x-3">
          <div className="flex flex-row gap-x-5">
            <img src={AdpushupSymbol} width={40} alt={"Logo"} />
            <img src={AdpushupLogo} width={160} alt={"Logo"} />
          </div>

          <p className="flex flex-col">
            AdPushup is a revenue optimization platform that helps publishers
            increase their ad revenue using automated A/B testing, header
            bidding, innovative ad formats, and adblock recovery. We are a
            Google Certified Publishing Partner (GCPP) and backed by Microsoft
            Ventures.
            <br />
            <br />
            <span className="has-inline-color">
              <sub>
                <a href="https://storyset.com/">Illustrations by Storyset</a>
              </sub>
            </span>
            <span className="has-inline-color">
              <sub>© 2021&nbsp;AdPushup Inc. All rights reserved.</sub>
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <h6 className="my-1 font-bold text-lg antialiased ">Company</h6>

          <a href="https://www.adpushup.com/company/">About</a>
          <a href="https://www.adpushup.com/careers/">Careers</a>
          <a href="https://www.adpushup.com/contact/">Contact</a>
          <a href="https://www.adpushup.com/pricing/">Pricing</a>
          <a href="https://www.adpushup.com/frequently-asked-questions/">
            FAQs
          </a>
          <a href="https://www.adpushup.com/privacy-policy/">Privacy Policy</a>
          <a href="https://www.adpushup.com/referral-program">
            Referral Program
          </a>
          <a href="https://www.adpushup.com/terms-of-service/">ToS</a>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <h6 className="my-1 font-bold text-lg antialiased ">Product</h6>
          <a href="https://www.adpushup.com/ad-layout-optimization/">
            Ad Layout Optimization
          </a>
          <a href="https://www.adpushup.com/ad-mediation/">Ad Mediation</a>
          <a href="https://www.adpushup.com/adblock-recovery/">
            Adblock Recovery
          </a>
          <a href="https://www.adpushup.com/amp-ads/">AMP Ads</a>
          <a href="https://www.adpushup.com/innovative-ad-formats/">
            Innovative Ad Formats
          </a>
          <a href="https://www.adpushup.com/header-bidding/">Header Bidding</a>
        </div>
        <div className="w-full  flex flex-col space-y-2">
          <h6 className="my-1 font-bold text-lg antialiased ">Solutions</h6>
          <a href="https://www.adpushup.com/for-adsense-publishers/">
            AdSense Publishers
          </a>
          <a href="https://www.adpushup.com/solutions-for-independent-publishers/">
            Independent Publishers
          </a>
          <a href="https://www.adpushup.com/solutions-for-enterprise-publishers/">
            Enterprise Media
          </a>
        </div>
        <div className="w-full  flex flex-col space-y-2">
          <a onClick={handleCTAClick}
            className="w-full shadow text-center font-medium rounded-md text-tuna bg-white py-4 md:text-lg antialiased transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
            href="https://campaign.adpushup.com/get-started/?utm_campaign=Outbound&utm_source=AMPAuditWebsite&utm_medium=Footer"
          >
            Speak to us
          </a>
          <br />
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Footer;
