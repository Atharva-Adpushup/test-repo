import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
function CompetitorTable({ tagData, competitorDetails }) {
  const calScore = (tagData) => {
    let baseScore = 60;

    if (tagData.sticky === true) {
      baseScore += 3.8;
    }
    if (tagData.refresh === true) {
      baseScore += 4.4;
    }
    if (tagData.rtc === true) {
      baseScore += 4.1;
    }
    if (tagData.multi === true) {
      baseScore += 3.4;
    }
    if (tagData.consent === true) {
      baseScore += 2.4;
    }
    if (tagData.dcp.includes("doubleclick")) {
      baseScore += 2.7;
    }
    return baseScore;
  };

  const headers = [];

  const adxRow = [
    <td className=" px-1 lg:px-3 py-3 text-center" key={tagData.id}>
      {tagData.dcp.includes("doubleclick") ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </td>,
  ];

  const hbRow = [
    <td className=" px-1 lg:px-3 py-3 text-center" key={tagData.id}>
      {tagData.rtc ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </td>,
  ];

  const adRefRow = [
    <td className=" px-1 lg:px-3 py-3 text-center" key={tagData.id}>
      {tagData.refresh ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </td>,
  ];

  const marsRow = [
    <td className=" px-1 lg:px-3 py-3 text-center" key={tagData.id}>
      {tagData.multi ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </td>,
  ];

  const stikyAdsRow = [
    <td className=" px-1 lg:px-3 py-3 text-center" key={tagData.id}>
      {tagData.sticky ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </td>,
  ];

  const ampRow = [
    <td className=" px-1 lg:px-3 py-3 text-center" key={tagData.id}>
      {tagData.analytics ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </td>,
  ];

  const ampConsentRow = [
    <td className=" px-1 lg:px-3 py-3 text-center" key={tagData.id}>
      {tagData.consent ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </td>,
  ];

  const ViewableRefRow = [
    <td className=" px-1 lg:px-3 py-3 text-center" key={tagData.id}>
      {tagData.dcp.includes("doubleclick") ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </td>,
  ];

  const scoreRow = [
    <td className=" px-1 lg:px-3 py-3 text-center" key={tagData.id}>
      {Math.round(calScore(tagData) * 10) / 10}
    </td>,
  ];

  competitorDetails.forEach((e) => {
    headers.push(
      <th className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {e.name}
      </th>
    );
    adxRow.push(
      <td className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {e.dcp.includes("doubleclick") ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </td>
    );

    hbRow.push(
      <td className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {e.rtc ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </td>
    );

    adRefRow.push(
      <td className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {e.refresh ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </td>
    );

    marsRow.push(
      <td className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {e.multi ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </td>
    );

    stikyAdsRow.push(
      <td className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {e.sticky ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </td>
    );

    ampRow.push(
      <td className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {e.analytics ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </td>
    );

    ampConsentRow.push(
      <td className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {e.consent ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </td>
    );

    ViewableRefRow.push(
      <td className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {e.dcp.includes("doubleclick") ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </td>
    );

    scoreRow.push(
      <td className=" px-1 lg:px-3 py-3 text-center" key={e.id}>
        {Math.round(calScore(e) * 10) / 10}
      </td>
    );
  });

  return (
    <div className="mx-auto max-w-xs md:max-w-screen-lg overflow-x-scroll rounded-md my-10 bg-white text-tuna ">
      <table className="w-full text-left px-4">
        <thead className="text-xs md:text-sm lg:text-lg">
          <tr>
            <th className=" px-1 lg:px-3 py-3 ">Criteria</th>
            <th className=" px-1 lg:px-3 py-3 text-center">Your Site</th>
            {headers}
          </tr>
        </thead>

        <tbody className="text-xs md:text-sm  lg:text-lg">
          <tr>
            <td className=" px-1 lg:px-3 py-3 ">AdX Setup</td>
            {adxRow}
          </tr>
          <tr>
            <td className=" px-1 lg:px-3 py-3 ">Header Bidding</td>
            {hbRow}
          </tr>
          <tr>
            <td className=" px-1 lg:px-3 py-3 ">Ad Refresh</td>
            {adRefRow}
          </tr>
          <tr>
            <td className=" px-1 lg:px-3 py-3 ">Multisize Ad Request Support</td>
            {marsRow}
          </tr>
          <tr>
            <td className=" px-1 lg:px-3 py-3 ">Sticky Ads</td>
            {stikyAdsRow}
          </tr>
          <tr>
            <td className=" px-1 lg:px-3 py-3 ">AMP Analytics</td>
            {ampRow}
          </tr>
          <tr>
            <td className=" px-1 lg:px-3 py-3 ">AMP Consent</td>
            {ampConsentRow}
          </tr>
          <tr>
            <td className=" px-1 lg:px-3 py-3 ">Viewable Refresh</td>
            {ViewableRefRow}
          </tr>
          <tr className="border-t">
            <td className=" px-1 lg:px-3 py-3  ">Score</td>
            {scoreRow}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompetitorTable;
