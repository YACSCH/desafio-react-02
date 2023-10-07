import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

import './index.css'

const SocialButton = ({ icon }) => {
  const socialIcons = {
    'fa-facebook': faFacebook,
    'fa-github': faGithub,
    'fa-linkedin': faLinkedin,
  };

  return (
    <a className='btn btn-outline-dark rounded-circle'>
      <FontAwesomeIcon icon={socialIcons[icon]} />
    </a>
  );
};

export default SocialButton