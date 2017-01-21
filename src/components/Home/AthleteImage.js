import React from 'react';
import { Link } from 'react-router';

const AthleteImage = ({ athleteId, athleteImage, athleteName }) => {
	const pic_alt = `${athleteName} main picture.`;

	return (
		<Link to={`athlete/${athleteId}`}>
			<img 
				className="athlete-image" 
				src={'/public/img/' + athleteImage } 
				alt={pic_alt} />
		</Link>
	);
};

export default AthleteImage;