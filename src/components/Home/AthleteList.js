import React from 'react';
import VoteSnippet from 'components/VoteSnippet';
import { Link } from 'react-router';

const AthleteList = ({ athlete, onThumbsUp }) => {
	const pic_alt = athlete.known_as + ' main picture.';

	return (
		<div className="list-item">
			<div className="item-image">
				<Link to={`athlete/${athlete.id}/main`}>
					<img 
						className="athlete-image" 
						src={'/public/img/' + athlete.image } 
						alt={pic_alt} />
				</Link>
			</div>
			<div className="item-name">
				<h2>
					<Link to={`athlete/${athlete.id}/main`}>
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