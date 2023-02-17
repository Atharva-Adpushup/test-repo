import {
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Socials() {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <a href="https://www.facebook.com/AdPushup/">
        <FontAwesomeIcon className="text-white text-2xl" icon={faFacebook} />
      </a>
      <a href="https://twitter.com/adpushup?lang=en">
        <FontAwesomeIcon className="text-white text-2xl" icon={faTwitter} />
      </a>
      <a href="https://www.youtube.com/channel/UCX9OYQVX4vTJ68ArHzTNtbg">
        <FontAwesomeIcon className="text-white text-2xl" icon={faYoutube} />
      </a>
      <a href="https://in.linkedin.com/company/adpushup">
        <FontAwesomeIcon className="text-white text-2xl" icon={faLinkedin} />
      </a>
    </div>
  );
}

export default Socials;
