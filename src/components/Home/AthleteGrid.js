import React from 'react';
import VoteSnippet from 'components/VoteSnippet';
import { Link } from 'react-router';

const AthleteGrid = ({ athlete, onThumbsUp }) => {

	const pic_alt = athlete.known_as + ' main picture.';

	return(
		<div className="grid-wrapper">
			<Link to={`athlete/${athlete.id}/main`}>
				<img 
					className="athlete-image" 
					src={'/public/img/' + athlete.image } 
					alt={pic_alt} />
			</Link> 

			<VoteSnippet onThumbsUp={onThumbsUp} isVoted={athlete.voted} upvotes={athlete.upvotes} />

			<div className="athlete-bottom-info">
				<h2 className="athlete-name text-center inline-block" key={athlete.id}>
					<Link to={`athlete/${athlete.id}/main`}>
						{ athlete.known_as }
					</Link> 
				</h2>
			</div>
		</div>
	);
};

export default AthleteGrid;