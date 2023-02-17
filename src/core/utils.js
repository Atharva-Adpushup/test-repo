import Constants from './constants';

const setPropDataFromTags = (tagData, callback) => {
  let tempCards = Constants.CardsArrTemplate.map((item, index) => {
    if (item.feature === 'headerBidding') item.usingFeature = tagData.runsHb;
    else if (item.feature === 'numberOfDemandPartners') item.count = tagData.numberOfBiddersPresent;
    else if (item.feature === 'bidCaching') item.usingFeature = tagData.bidCachingEnabled;
    else if (item.feature === 'multiSizeAdRequests') item.usingFeature = tagData.supportsMultipleSizes;
    else if (item.feature === 'multiFormatAdRequests') item.usingFeature = tagData.supportsMultipleFormats;
    else if (item.feature === 'instreamVideoAds') item.usingFeature = tagData['Instream found?'].toUpperCase() === 'YES';
    else if (item.feature === 'adblockRecoverySetup') item.usingFeature = tagData['AdBlock recovery found?'].toUpperCase() === 'YES';
    else if (item.feature === 'amazonIntegration') item.usingFeature = tagData.hasAmazonUAM;
    else if (item.feature === 'consentManagement') item.usingFeature = tagData.consentManagement;
    return item;
  });

  console.log(tempCards);

  callback(tempCards);
};

export { setPropDataFromTags };
