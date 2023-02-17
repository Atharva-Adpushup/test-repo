import { Finding } from './index';

import AnalyticsSvg from '../assets/analytics.svg';
import BidCachingSvg from '../assets/bidcaching.svg';
import NumberOfDemandPartnersSvg from '../assets/numberofdemandpartners.svg';
import MultiSizeSvg from '../assets/multisize.svg';
import InstreamSvg from '../assets/instreamads.svg';
import MultiFormatSvg from '../assets/multiformatads.svg';
import AdblockSvg from '../assets/adblock.svg';
import AmazonIntegrationSvg from '../assets/amazonintegration.svg';
import AcceptTermsSvg from '../assets/acceptTerms.svg';

function Findings({ propertiesArr, compName }) {
  const data = {
    headerBidding: {
      title: 'Header Bidding',
      enabled: {
        findingsArr: ["Header bidding has been implemented to show ads on your website"],
        recommendArr: [
          'AdPushup applauds the implementation of header bidding on your ad setup',
          `Header bidding offers publishers a way to simultaneously offer their ad space to numerous SSPs or Ad Exchanges at once. This, in turn, significantly boosts your overall ad revenue`,
        ],
      },
      notEnabled: {
        findingsArr: ["Header bidding could not be found on your website's ad setup"],
        recommendArr: [
          'AdPushup strongly recommends implementing header bidding on your ad setup to increase the demand for your ad inventory by more than 25%',
          `Header bidding offers publishers a way to simultaneously offer ad space out to numerous SSPs or Ad Exchanges at once. This, in turn, significantly boosts your overall ad revenue `,
        ],
      },
      image: AnalyticsSvg,
    },
    numberOfDemandPartners: {
      title: 'Number of Demand Partners',
      lessThan5: {
        findingsArr: ["The total number of demand partners running on your ad setup was found to be less than 7"],
        recommendArr: [
          'Basis the analysis of your demand partners,website category, and traffic share - AdPushup recommends that the total number of demand partners running on your ad setup should at least be 7',
        ],
      },
      moreThan5: {
        findingsArr: ["The total number of demand partners running on your ad setup was found to be more than 7"],
        recommendArr: [
          'Basis the analysis of your demand partners, website category, and traffic share - AdPushup recommends that the total number of demand partners running on your ad setup should be 7',
        ],
      },
      equalTo5: {
        findingsArr: ["The total number of demand partners running on your ad setup was found to be 7"],
        recommendArr: [
          'AdPushup applauds that the total number of demand partners running on your ad setup is 7 which we believe is a balanced number for your website considering its category and traffic share',
          'However, you can choose to either increase or decrease this number as per your business requirements',
        ],
      },
      image: NumberOfDemandPartnersSvg,
    },
    bidCaching: {
      title: 'Bid Caching',
      enabled: {
        findingsArr: ["Bid caching is enabled on your programmatic ads setup"],
        recommendArr: [
          'AdPushup applauds that you have implemented bid caching to earn higher eCPM on subsequent refresh',
          'We’ll advise you to A/B test your current bid caching strategy - to eliminate any possible negative impact on your ad yield',
        ],
      },
      notEnabled: {
        findingsArr: ["Bid caching is not enabled on your programmatic ads setup"],
        recommendArr: [
          'AdPushup recommends that you should implement bid caching to earn higher eCPM on subsequent refresh',
          'We’ll advise you to A/B test your current bid caching strategy - to eliminate any possible negative impact on your ad yield',
        ],
      },
      image: BidCachingSvg,
    },
    multiSizeAdRequests: {
      title: 'Multi-Size Ad Requests',
      enabled: {
        findingsArr: ["Multi-size ad request support has been implemented on your programmatic ad setup"],
        recommendArr: [
          'Adpushup applauds that you have enabled support for multiple ad sizes in the same ad slot',
          'More advertisers bid for the same ad inventory, which gives you better match rates and higher eCPMs (hence, higher ad revenue)',
          'Enabling multi-size ads has no impact on the stability of your layout',
          'The stable layout prevents the content from "jumping around". Improves the user experience and helps to maintain a good CLS score',
        ],
      },
      notEnabled: {
        findingsArr: ["Multi-size ad request support has not been implemented on your programmatic ad setup"],
        recommendArr: [
          'AdPushup recommends enabling support for multiple ad sizes in the same ad slot - helps increase your ad revenue',
          'More advertisers bid for the same ad inventory - gives you better match rates and higher eCPMs',
          'Enabling multi-size ads has no impact on the stability of your layout',
          'The stable layout prevents the content from "jumping around". Improves the user experience, and helps to maintain a good CLS score',
        ],
      },
      image: MultiSizeSvg,
    },
    multiFormatAdRequests: {
      title: 'Multi-Format Ad Requests',
      enabled: {
        findingsArr: ["Multi-format ad request support is implemented on your programmatic ad setup"],
        recommendArr: [
          'AdPushup applauds implementing multi-format ad request support on your website',
          'Implementing multi-format ad request support enables you to run high-yielding ad formats to improve the ad revenue yield',
          "Based on the data from header bidding analytics, you can also selectively run ads based on the user's location and device",
        ],
      },
      notEnabled: {
        findingsArr: ["Multi-format ad request support is not implemented on your programmatic ad setup"],
        recommendArr: [
          'AdPushup recommends implementing multi-format ad request support on your website',
          'Implementing multi-format ad request support enables you to run high-yielding ad formats to improve the ad revenue yield',
          "Based on the data from header bidding analytics, you can also selectively run ads on the basis of the user's location and device",
        ],
      },
      image: MultiFormatSvg,
    },
    instreamVideoAds: {
      title: 'Instream Video Ads',
      enabled: {
        findingsArr: ["Instream video ads are running on your website"],
        recommendArr: [
          "AdPushup applauds that you’re running Instream Video ads on your website",
          'For websites that have their own video inventory, Instream Video ads generate much higher eCPMs compared to other ad formats which results in a higher ad revenue',
        ],
      },
      notEnabled: {
        findingsArr: [
          "Instream video ads could not be found on your website",
          'It could be either because you do not have enough video inventory or because you consciously chose to not implement it',
        ],
        recommendArr: [
          'AdPushup recommends that you should run Instream Video ads on your website (in case you have not implemented it already)',
          'For websites that have their own video inventory, Instream Video ads generate much higher eCPMs compared to other ad formats which results in higher ad revenue',
        ],
      },
      image: InstreamSvg,
    },
    adblockRecoverySetup: {
      title: 'Adblock Recovery Setup',
      enabled: {
        findingsArr: [
          "An AdBlock recovery setup has been implemented on your website to monetize the AdBlock traffic",
          'No AdBlock recovery solution is being used for Samsung and Opera mobile browsers',
        ],
        recommendArr: [
          'AdPushup applauds the implementation of an AdBlock recovery setup on your website that helps you recover a large part of the lost revenue',
          'AdPushup also strongly recommends that a mobile AdBlock revenue recovery solution should be implemented for recovering the revenue lost on Samsung and Opera browsers',
          'Web publishers worldwide are losing anywhere from 10-40% of their ad revenue (depending on traffic geo, ad density, industry vertical, and other factors) due to the increasing use of AdBlock',
        ],
      },
      notEnabled: {
        findingsArr: [
          "No AdBlock recovery setup has been implemented on your website to monetize the AdBlock traffic",
          'No AdBlock recovery solution is being used for Samsung and Opera mobile browsers',
          'You should be able to recover around 70% of the revenue lost due to AdBlock',
        ],
        recommendArr: [
          'AdPushup recommends the use of AdRecover as AdRecover helps you show non-intrusive ads to your AdBlock traffic through header bidding to recover a majority of the lost revenue',
          'AdPushup strongly recommends that a mobile AdBlock revenue recovery solution should be implemented for recovering the revenue lost on Samsung and Opera browsers',
          'Web publishers worldwide are losing anywhere from 10-40% of their ad revenue (depending on traffic geo, ad density, industry vertical, and other factors) due to the increasing use of AdBlock',
        ],
      },
      image: AdblockSvg,
    },
    amazonIntegration: {
      title: 'Amazon Integration',
      enabled: {
        findingsArr: ["Amazon UAM/TAM demand is found to be enabled on your website's ad setup"],
        recommendArr: [
          'AdPushup applauds the integration of Amazon UAM/TAM into your ad setup',
          'It helps you access more buyers which increases bid pressure and eventually your overall ad revenue',
        ],
      },
      notEnabled: {
        findingsArr: ["Amazon UAM/TAM demand is not enabled on your website's ad setup"],
        recommendArr: [
          'AdPushup recommends the integration with Amazon UAM/TAM so that you get more demand for your traffic',
          'It can help you access more buyers which increases bid pressure and eventually your overall ad revenue',
        ],
      },
      image: AmazonIntegrationSvg,
    },
    consentManagement: {
      title: 'Consent Management',
      enabled: {
        findingsArr: ["A consent management module has been implemented on your website"],
        recommendArr: [
          'AdPushup applauds the implementation of a consent management module',
          'AdPushup recommends that your consent management platform is TCF v2.0 compliant',
          "The consent management module helps you comply with privacy legislations like European Union's GDPR and USA’s CCPA (California Consumer Privacy Act)",
        ],
      },
      notEnabled: {
        findingsArr: ["A consent management module could not be found on your website"],
        recommendArr: [
          'AdPushup recommends the implementation of a consent management module',
          'AdPushup also recommends that your consent management platform is TCF v2.0 compliant',
          "The consent management module helps you comply with privacy legislations like European Union's GDPR and USA’s CCPA (California Consumer Privacy Act)",
        ],
      },
      image: AcceptTermsSvg,
    },
  };

  return (
    <section className='py-4'>
      <div className='grid gap-y-8 my-8 grid-cols-1 '>
        {propertiesArr.map((item, index) => {
          const feature = data[item.feature];
          if (item.feature === 'numberOfDemandPartners') {
            return (
              <Finding
                key={'finding' + feature.title + index}
                title={feature.title}
                findings={item.count === 5 ? feature.equalTo5.findingsArr : item.count < 5 ? feature.lessThan5.findingsArr : feature.moreThan5.findingsArr}
                recommendations={
                  item.count === 5 ? feature.equalTo5.recommendArr : item.count < 5 ? feature.lessThan5.recommendArr : feature.moreThan5.recommendArr
                }
                image={feature.image}
                onLeft={index % 2 === 0}
              />
            );
          }
          return (
            <Finding
              key={'finding' + feature.title + index}
              title={feature.title}
              findings={item.usingFeature ? feature.enabled.findingsArr : feature.notEnabled.findingsArr}
              recommendations={item.usingFeature ? feature.enabled.recommendArr : feature.notEnabled.recommendArr}
              image={feature.image}
              onLeft={index % 2 === 0}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Findings;
