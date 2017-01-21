import React from 'react';
import TeamHonours from 'components/Athlete/TeamHonours';

const sum = (a, b) => a + b;
const honourLength = (honour) => honour.honours.length;

const Honours = ({ honours }) => {
	const numberOfTitles = honours.map(honourLength).reduce(sum);

	return (
		<div className="honours">
			<span className="team-honours-title">
				<span className="honours-icon">
					<i className="fa fa-trophy" aria-hidden="true"></i>
				</span> Honours & Records: 
				<span className="badge title-badge">
					{ numberOfTitles }
				</span>
			</span>
			<div className="honour-content">
			{ honours && honours.map(honour => {
				return (
					<TeamHonours team={honour.team} events={honour.honours} />
				);
			})}
			</div>
		</div>
	)
};

export default Honours;