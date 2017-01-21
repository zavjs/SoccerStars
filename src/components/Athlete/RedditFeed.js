import React from 'react';

const RedditFeed = ({ feed }) => {

	return (
		<div className="twitter-feed">
			<span className="twitter-feed-title">
				<span className="twitter-icon">
					<i className="fa fa-reddit" aria-hidden="true"></i>
				</span> Reddit Feed:
			</span>
			<div className="reddit-container">
			{ feed.map(item => 
				<p className="twitter-status">
					<div className="reddit-status-title">
						<a target="_blank" href={`https://www.reddit.com/user/${item.data.author}`}>@{item.data.author}</a> -   
						<a target="_blank" href={item.data.url}>
							{ ' ' + item.data.title}
						</a>
					</div>

					{ item.data.url.endsWith('.mp4') ? 
						<video width="100%" controls>
							<source src={item.data.url} type="video/mp4" />
							Your browser does not support the video tag.
						</video>: '' }
				</p>
			)}
			</div>
		</div>
	);
};

export default RedditFeed;