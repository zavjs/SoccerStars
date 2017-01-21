import React from 'react';
import Honours from 'components/Athlete/Honours';
import SuggestLink from 'components/SuggestLink';

const AthleteBasicInfo = ({ description, honours, athleteId }) => {

	const noDescription = 'This athlete has no description. Suggest one.';

	return (
		<div className="athlete-basic-info">
			<div className="athlete-info">
				<span className="basic-info-title">
					<span className="athlete-info-icon">
						<i className="fa fa-info" />
					</span> Basic Info:
				</span>
				<p className="abstract">
					<i>{description || <SuggestLink whatLacks='description' to={athleteId} />}</i>
				</p>
			</div>
			<Honours honours={honours} />
		</div>
	);
};

export default AthleteBasicInfo;