import React from 'react';

const VoteSnippet = ({ onThumbsUp, upvotes, isVoted }) => {
	return (
		<span className="athlete-votes">
			<i onClick={onThumbsUp} className={ isVoted ? 'fa fa-thumbs-up' : 'fa fa-thumbs-o-up' } aria-hidden="true"></i>
			<span className="athlete-thumbs-counter">
				{upvotes}
			</span>
		</span> 
	)
};

export default VoteSnippet;