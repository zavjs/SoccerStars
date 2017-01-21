import React from 'react';
import { Link } from 'react-router';

const AthleteHeader = ({ coverImage, athleteName, athletePicture, athleteId }) => {
	const bgImage = `url("/public/img/${coverImage}")`;
	const picAlt = `${athleteName.known_as} main picture.`;

	return (
		<header>
			<div style={{ backgroundImage: bgImage }} className="cover">
				<figure className="athlete-profile">
					<img 
						src={'/public/img/' + athletePicture }
						alt={picAlt} />
				</figure>
				<h2 className="athlete-profile-name text-center">{athleteName}</h2>
			</div>
			<div className="athlete-tabs">
				<div className="athlete-tab text-center inline-block inactive-tab">

				</div>
				<div className="athlete-tab text-center inline-block active">
					<Link to={`/athlete/${athleteId}/main`}>Main</Link>
				</div>
				<div className="athlete-tab text-center inline-block ">
					<Link to={`/athlete/${athleteId}/chat`}>Chat</Link>
				</div>
				<div className="athlete-tab text-center inline-block ">
					<Link to={`/athlete/${athleteId}/photos`}>Photos</Link>
				</div>
				<div className="athlete-tab text-center inline-block ">
					<Link to={`/athlete/${athleteId}/videos`}>Videos</Link>
				</div>
			</div>
		</header>
	);
}


export default AthleteHeader;