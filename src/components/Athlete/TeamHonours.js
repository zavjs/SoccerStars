import React from 'react';
import Honour from 'components/Athlete/Honour';

const TeamHonours = ({ team, events }) => 
	<div className="team-honours">
		<h4 className="team">{team}</h4>
		<ul className="events">
		{events.map(event => 
			<Honour name={event.event} year={event.year} />
		)}
		</ul>
	</div>

export default TeamHonours;