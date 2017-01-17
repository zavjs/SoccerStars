import React from 'react';
import VoteSnippet from 'components/VoteSnippet';
import { Link } from 'react-router';

const AthleteGrid = ({ athlete, onThumbsUp }) => {
	return(
		<div className="grid-wrapper">
			<Link to={`athlete/${athlete.id}`}>
				<img className="athlete-image" src={'/public/img/' + athlete.image } />
			</Link> 

			<VoteSnippet onThumbsUp={onThumbsUp} isVoted={athlete.voted} upvotes={athlete.upvotes} />

			<div className="athlete-bottom-info">
				<h2 className="athlete-name" key={athlete.id}>
					<Link to={`athlete/${athlete.id}`}>
						{ athlete.known_as }
					</Link> 
				</h2>
			</div>
		</div>
	);
};

export default AthleteGrid;