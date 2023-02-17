const backendUrl = process?.env?.NODE_ENV === 'production' ? '' : 'http://localhost:3098';

const Constants = {
  CardsArrTemplate: [
    { feature: 'headerBidding', usingFeature: false },
    { feature: 'numberOfDemandPartners', count: 0 },
    { feature: 'bidCaching', usingFeature: false },
    { feature: 'multiSizeAdRequests', usingFeature: false },
    { feature: 'multiFormatAdRequests', usingFeature: false },
    { feature: 'instreamVideoAds', usingFeature: false },
    { feature: 'adblockRecoverySetup', usingFeature: true },
    { feature: 'amazonIntegration', usingFeature: false },
    { feature: 'consentManagement', usingFeature: false },
  ],
  urls: {
    compDetailUrl: backendUrl + '/api/getCompnayDetails',
    ampTagUrl: backendUrl + '/api/getAmpTag',
    screenshotUrl: backendUrl + '/api/screenshot',
    getCompetitors: backendUrl + '/api/getCompetitors',
  },
  links: {
    requestDemoLink: 'https://campaign.adpushup.com/get-started/?utm_campaign=Outbound&utm_source=AMPAuditWebsite&utm_medium=CTA',
  },
  axiosConfig: {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
};

export default Constants;
