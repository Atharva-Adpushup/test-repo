import React, { useEffect, useState } from "react";
import axios from "axios";

//Section Imports

import Conclusion from "./Conclusion";
import { Loader } from "../../components";
import Constants from "../../core/constants";

function AuditScreen(props) {

  const [competitorDetails, setCompetitorDetails] = useState();
  const [ampTag, setAmpTag] = useState();

  useEffect(() => {
    if (props?.match?.params?.companyID) {
      fetchData(props.match.params.companyID);
      fetchAmpTagData(props.match.params.companyID)
    }
  }, [props.match]);

  const fetchData = (companyHubspotID) => {
    axios
      .post(
        Constants.urls.getCompetitors,
        new URLSearchParams({
          companyHubspotID: companyHubspotID,
        }),
        Constants.axiosConfig
      )
      .then((res) => {
        console.log(res.data);
        if (res.data) setCompetitorDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchAmpTagData = (companyHubspotID) => {
    axios
      .post(
        Constants.urls.ampTagUrl,
        new URLSearchParams({
          companyHubspotID: companyHubspotID,
        }),
        Constants.axiosConfig
      )
      .then((res) => {
        if (res.data && Object.keys(res.data).length > 0) {
          console.log(res.data);
          setAmpTag(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {competitorDetails && ampTag ? (
        <>
          <Conclusion tagData={ampTag} competitorDetails={competitorDetails} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default AuditScreen;
