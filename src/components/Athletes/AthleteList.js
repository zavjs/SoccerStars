import React from 'react';
import VoteSnippet from 'components/VoteSnippet';
import { Link } from 'react-router';

const AthleteList = ({ athlete, onThumbsUp }) => {
	return (
		<div className="list-item">
			<div className="item-image">
				<Link to={`athlete/${athlete.id}`}>
					<img className="athlete-image" src={'/public/img/' + athlete.image } />
				</Link>
			</div>
			<div className="item-name">
				<h2>
					<Link to={`athlete/${athlete.id}`}>
						{ athlete.known_as }
					</Link>
				</h2>
			</div>
			<div className="item-votes">
				<VoteSnippet onThumbsUp={onThumbsUp} isVoted={athlete.voted} upvotes={athlete.upvotes} /> 
			</div>
		</div>
	);
};

export default AthleteList;