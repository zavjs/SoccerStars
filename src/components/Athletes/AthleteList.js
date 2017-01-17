import React from 'react';
import VoteSnippet from 'components/VoteSnippet';

const AthleteList = ({ athlete, onThumbsUp }) => {
	return (
		<div className="list-item">
			<div className="item-image">
				<a href={'/athletes/' + athlete.id }>
					<img className="athlete-image" src={'/public/img/' + athlete.image } />
				</a>
			</div>
			<div className="item-name">
				<h2>
					<a href={'/athletes/' + athlete.id }>{ athlete.known_as }</a>
				</h2>
			</div>
			<div className="item-votes">
				<VoteSnippet onThumbsUp={onThumbsUp} isVoted={athlete.voted} upvotes={athlete.upvotes} /> 
			</div>
		</div>
	);
};

export default AthleteList;