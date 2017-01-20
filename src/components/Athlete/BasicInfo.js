import React from 'react';

const BasicInfo = ({ description }) => {
	return (
		<div className="athlete-basic-info">
			<div className="athlete-info">
				<span className="basic-info-title">
					<span className="athlete-info-icon">
						<i className="fa fa-info" />
					</span> Basic Info:
				</span>
				<p className="abstract">
					{description}
				</p>
			</div>
			<div className="honours">
				<span className="team-honours-title">
					<span className="honours-icon">
						<i className="fa fa-trophy" aria-hidden="true"></i>
					</span> Honours:
				</span>
				<div className="team-honours">
					<h4 className="team">Barcelona</h4>
					<ul className="events">
						<li>Copa del Rey - 2004</li>
						<li>Copa Emílio Santiago - 2005</li>
						<li>Campeonato Español - 2005 </li>
						<li>UEFA Champions League - 2007</li>
					</ul>
				</div>
				<div className="team-honours">
					<h4 className="team">Borussia Dortmund</h4>
					<ul className="events">
						<li>Coupe Champs Elyseé - 2007</li>
						<li>Herr Coupe Santiago Barnabé - 2007</li>
						<li>Dustche Matchndhör- 2007 </li>
						<li>UEFA Champions League - 2008</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BasicInfo;