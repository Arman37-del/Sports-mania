import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialIcons.css'

const SocialIcons = ({ youtube, facebook, twitter, instagram }) => {
    return (
        <div className="social-icon">
            {facebook && <a target='_blank' rel='noreferrer' href={"https://" + facebook}><FontAwesomeIcon icon={faFacebook} /></a>}
            {youtube && <a target='_blank' rel='noreferrer' href={'http://' + youtube}><FontAwesomeIcon icon={faYoutube} /></a>}
            {twitter && <a target='_blank' rel='noreferrer' href={'http://' + twitter}><FontAwesomeIcon icon={faTwitter} /></a>}
            {instagram && <a target='_blank' rel='noreferrer' href={'http://' + instagram}><FontAwesomeIcon icon={faInstagram} /></a>}
        </div>
    );
};

export default SocialIcons;