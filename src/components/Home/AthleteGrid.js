import React from 'react';
import VoteSnippet from 'components/VoteSnippet';
import AthleteImage from 'components/Home/AthleteImage';
import { Link } from 'react-router';

const AthleteGrid = ({ athlete, onThumbsUp }) => {
	return(
		<div className="grid-wrapper">
			<AthleteImage 
				athleteId={athlete.id} 
				athleteImage={athlete.image} 
				athleteName={athlete.known_as} />

			<VoteSnippet onThumbsUp={onThumbsUp} isVoted={athlete.voted} upvotes={athlete.upvotes} />

			<div className="athlete-bottom-info">
				<h2 className="athlete-name text-center inline-block" key={athlete.id}>
					<Link to={`athlete/${athlete.id}`}>
						{ athlete.known_as }
					</Link> 
				</h2>
			</div>
		</div>
	);
};

export default AthleteGrid;