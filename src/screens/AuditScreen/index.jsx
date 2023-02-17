import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Section Imports
import HeroSection from './HeroSection';
import Introduction from './Intro';
import FeatureSection from './FeatureSection';
import Conclusion from './Conclusion';
import ReachOut from './ReachOut';
import CurrSetup from './CurrSetup';
import { Loader } from '../../components';
import Constants from '../../core/constants';
import ScrollContactButton from '../../components/ScrollContactButton';

function AuditScreen(props) {
  const [companyDetails, setCompanyDetails] = useState();

  useEffect(() => {
    if (props?.match?.params?.companyID) {
      fetchData(props.match.params.companyID);
    }
  }, [props.match]);

  const fetchData = async (companyHubspotID) => {
    try {
      let res = await axios.post(
        Constants.urls.ampTagUrl,
        new URLSearchParams({
          companyHubspotID: companyHubspotID,
        }),
        Constants.axiosConfig
      );
      if (res.data && Object.keys(res.data).length > 0) {
        console.log(res.data);
        if (res.data['Final Score']) res.data['Final Score'] = res.data['Final Score'].toFixed(2);
        setCompanyDetails(res.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {companyDetails ? (
        <>
          <HeroSection compName={companyDetails['Company Name']} tagData={companyDetails} />

          <Introduction tagData={companyDetails} />
          <CurrSetup
            compName={companyDetails['Company Name']}
            tagData={companyDetails}
            compId={props?.match?.params?.companyID}
            domain={companyDetails.domain}
          />
          <FeatureSection tagData={companyDetails} />
          <Conclusion tagData={companyDetails} />
          <ReachOut compId={props?.match?.params?.companyID} />
          <ScrollContactButton compId={props?.match?.params?.companyID} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default AuditScreen;
