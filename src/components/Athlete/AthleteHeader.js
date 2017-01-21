import React from 'react';
import AthleteHeaderItem from 'components/Athlete/AthleteHeaderItem';

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
				<AthleteHeaderItem 
					athleteId={athleteId} 
					section='main' 
					title='Main' />
				<AthleteHeaderItem 
					athleteId={athleteId} 
					section='chat' 
					title='Chat' />
				<AthleteHeaderItem 
					athleteId={athleteId} 
					section='photos' 
					title='Photos' />
				<AthleteHeaderItem 
					athleteId={athleteId} 
					section='videos'
					title='Videos' />
			</div>
		</header>
	);
}


export default AthleteHeader;