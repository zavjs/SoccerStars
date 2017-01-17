import React from 'react';
import VoteSnippet from 'components/VoteSnippet'

const AthleteGrid = ({ athlete, onThumbsUp }) => {
	return(
		<div className="grid-wrapper">
			<a href={'/athletes/' + athlete.id }>
				<img className="athlete-image" src={'/public/img/' + athlete.image } />
			</a> 

			<VoteSnippet onThumbsUp={onThumbsUp} isVoted={athlete.voted} upvotes={athlete.upvotes} />

			<div className="athlete-bottom-info">
				<h2 className="athlete-name" key={athlete.id}>
					<a href={'/athletes/' + athlete.id }>
						{ athlete.known_as }
					</a>
				</h2>
			</div>
		</div>
	);
};

export default AthleteGrid;