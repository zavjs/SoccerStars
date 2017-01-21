import React from 'react';
import { Link } from 'react-router';

const AthleteHeaderItem = ({ athleteId, section, title }) => {
	return (
		<div className="athlete-tab text-center inline-block">
			<Link to={`/athlete/${athleteId}/${section}`}>{title}</Link>
		</div>
	)
};

export default AthleteHeaderItem;