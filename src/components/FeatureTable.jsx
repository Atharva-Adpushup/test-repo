import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
function FeatureTable({ tagData }) {
  console.log(tagData);
  return (
    <div className='mx-auto rounded-md my-10 sm:w-full lg:w-5/12 bg-white text-tuna'>
      <table className='table-auto border-collapse px-1 '>
        <thead className='text-xl lg:text-2xl'>
          <tr>
            <th className='py-3'>Criteria</th>
            <th className='py-3'>Assessment</th>
          </tr>
        </thead>

        <tbody className='text-lg'>
          <tr>
            <td className='w-1/2 py-1'>Header Bidding</td>
            <td className='w-1/3 py-1'>{tagData.runsHb ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</td>
          </tr>
          <tr>
            <td className='w-1/2 py-1'>Number of Demand Partners</td>
            <td className='w-1/3 py-1'>
              <b>{tagData.numberOfBiddersPresent}</b>
            </td>
          </tr>
          <tr>
            <td className='w-1/2 py-1'>Bid Caching</td>
            <td>{tagData.bidCachingEnabled ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</td>
          </tr>
          <tr>
            <td className='w-1/2 py-1'>Multi-Size Ad Requests</td>
            <td>{tagData.supportsMultipleSizes ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</td>
          </tr>
          <tr>
            <td className='w-1/2 py-1'>Multi-Format Ad Requests</td>
            <td>{tagData.supportsMultipleFormats ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</td>
          </tr>
          <tr>
            <td className='w-1/2 py-1'>Instream Video Ads</td>
            <td>
              <b>{tagData['Instream found?']}</b>
            </td>
          </tr>
          <tr>
            <td className='w-1/2 py-1'>Adblock Recovery Setup</td>
            <td>
              <b>{tagData['AdBlock recovery found?']}</b>
            </td>
          </tr>
          <tr>
            <td className='w-1/2 py-1'>Amazon Integration</td>
            <td>{tagData.hasAmazonUAM ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</td>
          </tr>
          <tr>
            <td className='w-1/2 py-1 pb-3'>Consent Management</td>
            <td className='pb-3'>{tagData.consentManagement ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FeatureTable;
